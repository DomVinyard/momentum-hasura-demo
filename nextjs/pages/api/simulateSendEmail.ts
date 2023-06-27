import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("Simulating sending email...");
    return res.status(200).json("Email sent!");
  } catch (e: any) {
    console.error(e);
    res.send({ error: e.message });
  }
}
