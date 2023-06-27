import { Configuration, OpenAIApi } from "openai";
import { get } from "request";

export const getRandomOpenAIKey = () => {
  const keyStr = process.env.OPENAI_KEY;
  if (!keyStr) {
    throw new Error("OPENAI_KEY is not set");
  }

  const keySplit = keyStr.split(",");
  const key = keySplit[Math.floor(Math.random() * keySplit.length)];
  return key;
};

const runGPTQuery = async ({ query = "", system = "" }: any) => {
  try {
    const configuration = new Configuration({ apiKey: getRandomOpenAIKey() });
    const openai = new OpenAIApi(configuration);
    const { data } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 400,
      messages: [
        {
          role: "system",
          content: "Use markdown to format all returned text.",
        },
        { role: "system", content: system },
        { role: "user", content: query },
      ],
    });
    return data?.choices?.[0]?.message?.content;
  } catch (e) {
    console.log(e);
  }
};

export default runGPTQuery;
