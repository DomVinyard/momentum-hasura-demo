import { useGetBlockSubscription } from "../../generated/graphql";
import {
  Box,
  Flex,
  Stack,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import LoadingSkeleton from "../BlockInline/components/LoadingSkeleton";
import LengthSelect from "./components/LengthSelect";
import BlockType from "./components/BlockType";
import PromptEditable from "./components/PromptEditable";
import GuidanceList from "./components/GuidanceList";
import Preview from "./components/Preview";
import Actions from "./components/Actions";

export default function BlockModal({ onClose, blockID }: any) {
  const { data, loading } = useGetBlockSubscription({
    variables: { blockID: blockID },
  });
  const block = data?.blocks_by_pk;
  const documentID = data?.blocks_by_pk?.id;
  const blockLength =
    block?.guidance.find(({ type }: any) => type === "BLOCK_LENGTH")?.prompt ||
    "short";

  return (
    <ModalContent>
      <Flex h={"65vh"} minH={"65vh"} maxH="65vh">
        <Box overflow={"scroll"} flex={1} mt={0}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <BlockType loading={loading} blockType={block?.type} />
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <>
                {!block?.isLocked && (
                  <>
                    <LengthSelect blockLength={blockLength} blockID={blockID} />
                    <PromptEditable prompt={block?.prompt} blockID={blockID} />
                  </>
                )}
                <Box mt={9}>
                  {!block?.isLocked && (
                    <GuidanceList
                      guidance={block?.guidance}
                      blockID={blockID}
                      documentID={documentID}
                    />
                  )}
                  <Stack mt={8} pt={6} spacing={0}>
                    <Actions
                      onClose={onClose}
                      blockID={blockID}
                      isLocked={block?.isLocked}
                    />
                  </Stack>
                </Box>
              </>
            )}
          </ModalBody>
        </Box>
        <Box overflow={"scroll"} flex={1} bg="white" px={8}>
          <Preview block={block} onClose={onClose} />
        </Box>
      </Flex>
    </ModalContent>
  );
}
