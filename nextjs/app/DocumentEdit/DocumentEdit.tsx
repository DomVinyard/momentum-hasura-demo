// simple component

import { useRouter } from "next/router";
import { Box, Button, Flex, Text, Heading } from "@chakra-ui/react";
import {
  useAddBlockMutation,
  useGetDocumentSubscription,
} from "../../generated/graphql";
import useSessionStorageState from "use-session-storage-state";
import regenerateBlock from "../../actions/regenerateBlock";
import getBlockGuidance from "../../actions/getBlockGuidance";
import DocumentLoadingSkeleton from "./components/DocumentLoadingSkeleton";
import BlockSuggestions from "./components/BlockSuggestions";
import Header from "./components/Header";
import QuickAddInput from "./components/QuickAddInput";
import BlockList from "./components/BlockList";

const MAX_BLOCKS_PER_DOCUMENT = 10;

export default function DocumentEdit() {
  const router = useRouter();
  const { id: document_id } = router.query;
  const { data, loading, error } = useGetDocumentSubscription({
    variables: { documentID: document_id },
  });

  const allBlockIds =
    data?.document?.blocks.map(({ id }: { id: string }) => id) || [];
  const [expanded, setExpanded] = useSessionStorageState(`doc_${document_id}`, {
    defaultValue: allBlockIds,
  });
  const [addBlock] = useAddBlockMutation({
    refetchQueries: ["GetDocument", "GetDocuments"],
  });

  const guidanceCount =
    data?.document?.guidance?.filter(({ is_enabled }) => is_enabled).length ||
    0;

  const addBlockAndStartGeneration = async (
    prompt: string,
    blockCount: number = 0,
    type: string = "ai-text",
    is_manual_overwrite: boolean = false
  ) => {
    let text = "";
    if (type === "plain-text") {
      text = "Edit me...";
    } else if (type === "image") {
      text = `![](${prompt})`;
    }

    if (blockCount >= MAX_BLOCKS_PER_DOCUMENT) {
      alert(
        `You have reached the maximum number of blocks per document (${MAX_BLOCKS_PER_DOCUMENT}).`
      );
      return;
    }

    const { data } = await addBlock({
      variables: {
        documentID: document_id,
        prompt,
        index: blockCount,
        type,
        is_manual_overwrite,
        output: text,
      },
    });

    const blockID = data?.insert_blocks?.returning[0]?.id;
    setExpanded((e) => [...e, blockID]);
    if (is_manual_overwrite) return;
    const req1 = getBlockGuidance({ blockID: `${blockID}` });
    const req2 = regenerateBlock({ blockID, documentID: `${document_id}` });
    await Promise.all([req1, req2]);
  };

  if (error) return <div>{JSON.stringify(error)}</div>;
  if (loading)
    return (
      <Box>
        <DocumentLoadingSkeleton />
      </Box>
    );

  return (
    <Box pt={4}>
      <Box px={50}>
        <Header
          isPublic={data?.document?.is_public}
          guidanceCount={guidanceCount}
          documentID={document_id}
        />
        <Box mt={10}>
          <Text fontSize={"sm"} fontWeight={"bold"} color={"#999"}>
            {data?.document?.template?.title || "No template"}
          </Text>
          <Text fontSize={"lg"} color={"#999"} mt={0}>
            {data?.document?.prompt}
          </Text>
        </Box>
        <Heading mt={8}>
          {data?.document?.title}
        </Heading>
        {!!data?.document?.blocks?.length && (
          <Flex justifyContent={"flex-start"}>
            <Button
              mb={2}
              size={"xs"}
              variant={"ghost"}
              colorScheme="blue"
              onClick={() => setExpanded((e) => (e.length ? [] : allBlockIds))}
            >
              {expanded.length > 0 ? "Collapse all" : "Expand all"}
            </Button>
          </Flex>
        )}
      </Box>
      <BlockList
        blocks={data?.document?.blocks}
        addBlockAndStartGeneration={addBlockAndStartGeneration}
        documentID={document_id}
      />
      <Box mt={8} px={50}>
        <QuickAddInput
          blockCount={data?.document?.blocks?.length || 0}
          addBlockAndStartGeneration={addBlockAndStartGeneration}
        />
        <BlockSuggestions
          suggestions={data?.document?.metadata?.suggestions}
          blocks={data?.document?.blocks}
          retrievePrompt={addBlockAndStartGeneration}
        />
      </Box>
    </Box>
  );
}
