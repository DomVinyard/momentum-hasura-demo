import type { NextApiRequest, NextApiResponse } from "next";
import runGPTQuery from "../../lib/gpt-query";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { connectToDB } from "../../lib/apollo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) return res.status(401).send("Unauthorized");
    const { topic } = req.body;
    const response =
      (await runGPTQuery({
        query: `Here is a title for a document: ${topic}\n\nDesign a high level overview of this document split by paragraph.\n\nStart with the phrase "This document could include topics such as:"\n\n`,
        system: `Use bullet points to list the topics.\nDo not include speech marks.\nList at least four topics\n\nDo not include an introduce or conclusion.\n\nOnly give the list of topics.`,
      })) ?? "";

    res.send(response);
  } catch (e: any) {
    console.error(e);
    res.send({ error: e.message });
  }
}
