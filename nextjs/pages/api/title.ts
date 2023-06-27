import type { NextApiRequest, NextApiResponse } from "next";
import runGPTQuery from "../../lib/gpt-query";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { prompt } = req.body;
    const response =
      (await runGPTQuery({
        query: `Generate a title for this: ${prompt}`,
        system: `No more than 6 words. 
        Do not include speech marks. 
        Do not include full stop.
        Do not include any grammar.`,
      })) ?? "";

    //TODO - this is a workaround to remove the speech marks from the title
    const cleanResponse = response.replace(/"/g, "");
    res.send(cleanResponse);
  } catch (e: any) {
    console.error(e);
    res.send({ error: e.message });
  }
}
