import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { capitalise } from "../../../util/util";

export default function QuickAddInput({
  blockCount,
  addBlockAndStartGeneration,
}: {
  blockCount: number;
  addBlockAndStartGeneration: any;
}) {
  const [prompt, setPrompt] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.target.reset("");
    if (!prompt) return;
    const existingPrompt = `${prompt}`;
    setPrompt("");
    await addBlockAndStartGeneration(existingPrompt, blockCount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={"Add a section about..."}
        onChange={(e) => {
          setPrompt(capitalise(e.target.value));
        }}
        value={prompt}
        onSubmit={handleSubmit}
        flexGrow="1"
      />
    </form>
  );
}
