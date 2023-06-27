import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../lib/apollo";
import {
  BlockPreRegenerateDocument as Pre,
  BlockPostRegenerateDocument as Post,
  BlockSetStatusDocument as SetStatus,
  BlockPreRegenerateMutationHookResult,
  BlockPreRegenerateMutationResult,
  BlockPreRegenerateMutation,
} from "../../generated/graphql";

import {
  OpenAIStream,
  OpenAIStreamPayload,
  getStream,
} from "../../lib/OpenAIStream";
import { getAIBlockPrompt, getQuizBlockPrompt } from "./prompts/prompts";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { FetchResult } from "@apollo/client";

const WORDS_AT_A_TIME = 12;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user) return res.status(401).send("Unauthorized");
  const database = await connectToDB(session);
  const { blockID } = req.body;
  let didTimeout = false;
  let didComplete = false;
  let latestWords = 0;
  try {
    const TIMEOUT_SECONDS = 59;
    setTimeout(async () => {
      if (didComplete) return;
      didTimeout = true;
      await database.mutate({
        mutation: SetStatus,
        variables: { blockID, status: "TIMEOUT" },
      });
      res.send({ error: "TIMEOUT" });
    }, TIMEOUT_SECONDS * 1000);
    const generationTS = new Date().toISOString();
    const initial: FetchResult<BlockPreRegenerateMutation> =
      await database.mutate({
        mutation: Pre,
        variables: { blockID, generatedAt: generationTS },
      });
    const block = initial?.data?.update_blocks_by_pk;
    const type = block?.type;

    let query, system;
    if (type === "quiz") {
      ({ query, system } = getQuizBlockPrompt(block));
    } else {
      ({ query, system } = getAIBlockPrompt(blockID, block));
    }

    if (!query) return res.send("No query found.");

    let updatedOutput = "";
    const payload: OpenAIStreamPayload = await getStream({ query, system });
    const stream = await OpenAIStream(payload);
    const reader = stream.getReader();
    const read = async () => {
      const { done, value } = await reader.read();
      try {
        if (done) return onDone();
        onData(value);
        read();
      } catch (error) {
        console.error("Error reading from stream:", error);
      }
    };
    read();

    const onData = async (data: any) => {
      const decoder = new TextDecoder("utf-8");
      const string = decoder.decode(data);
      updatedOutput += string;
      const wordCount = updatedOutput.split(" ").length;
      if (wordCount % WORDS_AT_A_TIME === 0 && wordCount > latestWords) {
        latestWords = wordCount;
        await saveToDB({ status: "GENERATING" });
      }
    };

    const onDone = async () => {
      if (didTimeout) return;
      didComplete = true;
      await saveToDB({ status: "GENERATED" });
      res.send(updatedOutput);
    };

    const saveToDB = async ({ status = "GENERATING" }) => {
      const updated = { blockID, updatedOutput, generationTS, status };
      try {
        await database.mutate({ mutation: Post, variables: updated });
      } catch (e) {
        console.error(e);
      }
    };

    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    while (!didComplete && !didTimeout) await wait(1000);
  } catch (e: any) {
    console.error(e);
    await database.mutate({
      mutation: SetStatus,
      variables: { blockID, status: "OPEN_AI_ERROR" },
    });
    res.send({ error: e.message });
  }
}
