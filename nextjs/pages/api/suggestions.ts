import type { NextApiRequest, NextApiResponse } from "next";
import runGPTQuery from "../../lib/gpt-query";
import { connectToDB } from "../../lib/apollo";
import {
  GetDocumentSingleDocument,
  GetDocumentSingleQuery,
  UpdateSuggestionsDocument,
} from "../../generated/graphql";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { FetchResult } from "@apollo/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) return res.status(401).send("Unauthorized");
    const database = await connectToDB(session);
    const { documentID } = req.body;
    const { data }: FetchResult<GetDocumentSingleQuery> = await database.query({
      query: GetDocumentSingleDocument,
      variables: { documentID },
    });
    const document = data?.documents_by_pk;
    if (!document) {
      throw new Error(`Document not found: ${documentID}`);
    }
    const prompt = document.prompt;
    const template = document.template;
    console.log("document", document);
    const existingSections = document.blocks.map((b: any) => b.prompt);
    const response = await runGPTQuery({
      system: `
      You are a prompt engineer.
      You have a prompt for a document and a list of prompts for individual sections.
      Your job is to suggest new prompts to generate future sections of the document.
      `,
      query: `
      - Give me a list of three short prompts to generate future sections of the document.
      - The document is based on this prompt: "${prompt}"
      - The document is a ${template.title}
      - Common sections for this type of document are: ${
        template?.common_sections?.join(", ") || "unknown"
      }
      ${
        !existingSections
          ? ""
          : `
          The existing section prompts are: ${JSON.stringify(existingSections)}.
          `
      }
      Put your response in the following JSON structure:
      ["first prompt", "second prompt", "third prompt"]

      What are three more prompts?
      `,
    });
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
      mutation: UpdateSuggestionsDocument,
      variables: {
        documentID,
        suggestions,
      },
    });
    res.send(suggestions);
  } catch (e: any) {
    console.error(e);
    res.send({ error: e.message });
  }
}
