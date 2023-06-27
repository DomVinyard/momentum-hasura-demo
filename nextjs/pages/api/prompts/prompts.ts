import { BlockPreRegenerateMutation } from "../../../generated/graphql";

const lengthMap = {
  short: 50,
  medium: 125,
  long: 250,
};

export const getAIBlockPrompt = (
  blockID: string,
  block: BlockPreRegenerateMutation["update_blocks_by_pk"]
) => {
  if (!block?.document) return { query: undefined, system: undefined };
  const template = block?.document?.template || {};
  const documentMD = block?.document?.blocks
    .map((b: any) =>
      b.id === blockID
        ? `
THIS IS WHERE YOUR SECTION WILL BE INSERTED. ONLY REFERENCE CONTENT ABOVE THIS LINE.
`
        : b.output
    )
    .join("\n");

  const guidance = block?.guidance
    .concat(block?.document?.guidance)
    ?.filter?.(({ type }: any) => {
      return type === "CUSTOM";
    })
    .map((g: any) => g.prompt)
    .join("\n- ");

  const length =
    block?.guidance?.find?.(({ type }: any) => type === "BLOCK_LENGTH")
      ?.prompt || "short";

  const lengthString = `Make your reply about ${
    lengthMap[length as keyof typeof lengthMap]
  } words in length.`;

  const templateTitle = template.title || "document";

  const system = `
  You are an expert ${templateTitle} writer.
`;
  const query = `

Your job is to write a section of a ${template.title}.

- ${template?.prompt}
- You will be given the ${templateTitle} so far, and a prompt for the section you should write.
- You will also be given some guidance on how to write the section.
- Reference only parts of the ${templateTitle} that come earlier than the section you are writing.
- Your section is in addition to the ${templateTitle} so far.
- Your section is not the end of the ${templateTitle}.
- End your section ready for the next section to be written.
- Avoid adding a title or repeating the prompt.
- Avoid words like "Overall, ...", "In conclusion, ..." or similar phrases.
- Return the new section in markdown.
  
The ${templateTitle} is about: ${block.document.prompt}.

The ${templateTitle} so far is included inside the dashes below:

---
# ${block.document.title}

${documentMD}
---

Follow this guidance when writing the section:
- ${guidance}
- ${lengthString}
${template?.guidance || ""}

Write a section about: ${block.prompt}.
    `;

  return { query, system };
};

export const getQuizBlockPrompt = (block: any) => {
  const documentMD = block.document.blocks
    .slice(0, block.index)
    .map((b: any) => b.output)
    .join("\n");

  const guidance = block.guidance
    .concat(block.document.guidance)
    ?.filter?.(({ type }: any) => {
      return type === "CUSTOM";
    })
    .map((g: any) => g.prompt)
    .join("\n- ");

  const system = `Your job is to write several quiz questions and answers based on the content below.
Use markdown to format your response.
All questions should be formatted using <detail> and <summary> tags. They should be formatted like this.

<details>
<summary>What is the answer to this question?</summary>

This is the answer to the question.
</details>

You should include several questions and answers in your response.`;

  const query = `The document is about: ${block.document.prompt}.

The document title is: ${block.document.title}.

The document is included inside the dashes below:

---
${documentMD}
---

Follow this guidance when writing the quiz questions and answers:
- ${guidance}

Write several quiz questions and answers based on the content above.
    `;

  return { query, system };
};

export const getAIGuidance = (block: any) => {
  const system = `
      You are a prompt engineer.
      You have been given a prompt to generate a section of an article.
      Your job is to suggest short phrases that will modify the prompt to generate a better section.

      Example phrases:

      "make it simple"
      "avoid jargon"
      "include code snippets"
      "mention dates"
      "make it funny"
      "be concise"
      "be specific"
      "be clear"
      "don't mention politics"
      "don't mention religion"
      "avoid cliches"
      "avoid buzzwords"
      "avoid acronyms"
      "avoid slang"
      "use the active voice"
      "use the passive voice"
      `;
  const query = `
      Give me a list of three short phrases to modify a prompt.
      The document prompt is: ${block.document.prompt}.
      The section prompt is: ${block.prompt}.
      What are three short phrases that will modify the section prompt?
      Put your response in the following JSON structure:
      ["first prompt", "second prompt", "third prompt"]
      Each prompt should be 5 words maximum

      What are three suitable prompts?`;

  return { query, system };
};

export const getQuizGuidance = (block: any) => {
  const system = `
      You are a prompt engineer.
      You have been given a prompt to generate a set of a quiz questions and answers.
      Your job is to suggest short phrases that will modify the prompt to generate better questions and answers.

      Example phrases:

      "make them harder"
      "avoid jargon"
      "make them easier"
      "go deeper"
      "focus more on the details"
      "focus more on the big picture"`;
  const query = `Give me a list of three short phrases to modify a prompt.
      The document prompt is: ${block.document.prompt}.
      The section prompt is: ${block.prompt}.
      What are three short phrases that will modify the section prompt?
      Put your response in the following JSON structure:
      ["first prompt", "second prompt", "third prompt"]
      Each prompt should be 5 words maximum

      What are three suitable prompts?`;

  return { query, system };
};

export const getDocumentGuidance = (prompt: string) => {
  const system = `
      You are a prompt engineer.
      You have been given a prompt to generate a document.
      Your job is to suggest short phrases that will modify the prompt to generate better questions and answers.

      Example phrases:

      "make it formal"
      "avoid jargon"
      "make it informal"
      "assume no prior knowledge"
      "target beginners"
      "target experts"
      "use humour"
      "use a friendly tone"
      `;
  const query = `Give me a list of three short phrases to modify a prompt.
      The document prompt is: ${prompt}.
      What are three short phrases that will modify the section prompt?
      Put your response in the following JSON structure:
      ["first prompt", "second prompt", "third prompt"]
      Each prompt should be 5 words maximum

      What are three suitable prompts?`;

  return { query, system };
};
