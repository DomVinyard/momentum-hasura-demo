import { Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { useUpdateBlockOutputMutation } from "../../../generated/graphql";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import LoadingSkeleton from "../../BlockInline/components/LoadingSkeleton";
import ToggleLock from "../components/ToggleLock";
import { useState, useEffect } from "react";
import rehypeRaw from "rehype-raw";

export default function Preview({ block, onClose }: any) {
  const [updateOutput] = useUpdateBlockOutputMutation();

  const [overWrite, setOverWrite] = useState(block?.output);

  useEffect(() => {
    setOverWrite(block?.output);
  }, [block?.output]);

  return (
    <>
      <Flex alignItems={"center"} mt={4}>
        {block?.type === "ai-text" && (
          <ToggleLock blockID={block.id} isLocked={block.isLocked} />
        )}
      </Flex>
      <Box mt={12}>
        {!!block?.output && block?.isLocked ? (
          <>
            <Textarea
              onChange={(e) => {
                setOverWrite(e.target.value);
              }}
              flex={1}
              height={"450px"}
              value={overWrite}
            />
            <Button
              disabled={block?.output === overWrite}
              colorScheme={"blue"}
              onClick={async () => {
                await updateOutput({
                  variables: {
                    blockID: block.id,
                    updatedOutput: `${overWrite}`,
                  },
                });
                onClose();
              }}
              w="100%"
              mt={2}
            >
              Save Changes
            </Button>
          </>
        ) : (
          <Box className="markdown-body" pb={8} px={2}>
            {block?.output && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >{`${block?.output}`}</ReactMarkdown>
            )}
          </Box>
        )}
        {block?.status === "GENERATING" && <LoadingSkeleton />}
      </Box>
    </>
  );
}
