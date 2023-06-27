import { useEffect, useState } from "react";
import { Box, Accordion } from "@chakra-ui/react";
import { useUpdateBlockIndexManyMutation } from "../../../generated/graphql";
import BlockInline from "../../BlockInline/BlockInline";
import useSessionStorageState from "use-session-storage-state";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function BlockList({
  blocks,
  addBlockAndStartGeneration,
  documentID,
}: any) {
  const [updateBlockIndexesMany] = useUpdateBlockIndexManyMutation({
    refetchQueries: ["GetDocuments", "GetDocument"],
  });

  const [sortedBlocks, setSortedBlocks] = useState<any[]>([]);
  const [expanded, setExpanded] = useSessionStorageState(`doc_${documentID}`, {
    defaultValue: blocks?.map(({ id }: { id: string }) => id) || [],
  });

  // new blocks came in from the database (via websocket)
  useEffect(() => {
    if (blocks) {
      setSortedBlocks([...blocks]);
      // if any two blocks have the same index, update the indexes
      const indexes = blocks?.map((block: any) => block.index);
      if (new Set(indexes).size !== indexes.length) {
        updateBlockIndexes([...blocks]);
      }
      // if there is a gap in the indexes, update the indexes
      const allIndexesMatch = blocks.every(
        (block: any, i: number) => block.index === i
      );
      if (!allIndexesMatch) updateBlockIndexes([...blocks]);
      if (blocks.length === 1) setExpanded([blocks[0].id]);
    }
  }, [blocks]);

  const updateBlockIndexes = async (blocks: any[]) => {
    const inputData: any[] = [];
    blocks.forEach((block: any, i: number) => {
      block.index = i;
      inputData.push({
        _set: { index: block.index },
        where: { id: { _eq: block.id ?? 0 } },
      });
    });
    setSortedBlocks([...blocks?.map((block, i) => ({ ...block, index: i }))]);
    await updateBlockIndexesMany({
      variables: { updates: inputData },
    });
  };

  const onDragEnd = async (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const blocksCopy = [...(blocks ?? [])];
    const removed = blocksCopy?.splice(source.index, 1) || [];
    blocksCopy?.splice(destination.index, 0, removed[0]);
    updateBlockIndexes(blocksCopy);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Accordion
        index={expanded.map((id: string) =>
          sortedBlocks.findIndex((b: any) => b.id === id)
        )}
        allowMultiple
        onChange={(i: number[]) => {
          setExpanded(i.map((i) => sortedBlocks[i]?.id).filter(Boolean));
        }}
      >
        <Droppable droppableId={"column-1"} direction="vertical">
          {(provided: any) => (
            <Box mb={2} ref={provided.innerRef} {...provided.droppableProps}>
              {sortedBlocks.map((block, i) => (
                <BlockInline
                  block={block}
                  key={block.id}
                  defaultIndex={i}
                  retrievePrompt={addBlockAndStartGeneration}
                />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Accordion>
    </DragDropContext>
  );
}
