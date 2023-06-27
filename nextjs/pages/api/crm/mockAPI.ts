import type { NextApiRequest, NextApiResponse } from "next";
import runGPTQuery from "../../../lib/gpt-query";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectToDB } from "../../../lib/apollo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // https://649b246dbf7c145d023a0f46.mockapi.io/users
  console.log("hi");
  return res.status(200).send("test");
}
