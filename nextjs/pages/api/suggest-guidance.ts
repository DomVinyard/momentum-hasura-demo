import type { NextApiRequest, NextApiResponse } from "next";
import runGPTQuery from "../../lib/gpt-query";
import { connectToDB } from "../../lib/apollo";
import {
  AddGuidanceDisabledDocument,
  GetBlockPromptDocument,
} from "../../generated/graphql";
import { getAIGuidance, getQuizGuidance } from "./prompts/prompts";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) return res.status(401).send("Unauthorized");
    const database = await connectToDB(session);
    const { blockID } = req.body;
    const { data } = await database.query({
      query: GetBlockPromptDocument,
      variables: { blockID },
    });
    const block = data.blocks_by_pk;

    let query, system;
    if (block.type === "quiz") {
      ({ query, system } = getQuizGuidance(block));
    } else {
      ({ query, system } = getAIGuidance(block));
    }

    const response = await runGPTQuery({ query, system });
    if (!response) {
      throw new Error("No response from OpenAI API.");
    }
    const array = response.match(/\[(.*?)\]/gm)?.[0];
    if (!array) {
      throw new Error(
        `Response from OpenAI API was not in JSON format: ${response}`
      );
    }
    const suggestions = JSON.parse(`${array}`);
    await database.mutate({
      mutation: AddGuidanceDisabledDocument,
      variables: {
        guidance: suggestions.map((s: string) => ({
          prompt: s,
          parent_id: blockID,
          is_enabled: false,
        })),
      },
    });

    res.send(suggestions);
  } catch (e: any) {
    console.error(e);
    res.send({ error: e.message });
  }
}
