import type { NextApiRequest, NextApiResponse } from "next";
import runGPTQuery from "../../lib/gpt-query";
import { connectToDB } from "../../lib/apollo";
import { AddGuidanceDisabledDocument } from "../../generated/graphql";
import { getDocumentGuidance } from "./prompts/prompts";
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
    const { documentID, prompt } = req.body;
    const { query, system } = getDocumentGuidance(prompt);
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
          parent_id: documentID,
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
