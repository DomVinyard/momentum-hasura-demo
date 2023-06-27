import { Button, Heading } from "@chakra-ui/react";
import { useUpdateBlockMutation } from "../../../generated/graphql";
import { BiPencil } from "react-icons/bi";
import regenerateBlock from "../../../actions/regenerateBlock";

export default function PromptEditable({ prompt, blockID, documentID }: any) {
  const [updatePrompt] = useUpdateBlockMutation();
  return (
    <>
      <Heading pt={0} mb={1} color="#555" fontSize={"xs"}>
        Prompt
      </Heading>
      {prompt}
      <Button
        size={"xs"}
        ml={1}
        onClick={async () => {
          const updatedPrompt = window.prompt("Updated Prompt", prompt);
          if (!updatedPrompt) return;
          await updatePrompt({ variables: { blockID, updatedPrompt } });
          await regenerateBlock({ blockID, documentID });
        }}
      >
        <BiPencil /> Edit
      </Button>
    </>
  );
}
