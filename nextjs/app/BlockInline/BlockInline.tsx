import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay } from "@chakra-ui/react";
import BlockModal from "../BlockModal/BlockModal";
import { AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import Collapsed from "./components/Collapsed";
import Expanded from "./components/Expanded";
import HoverMenu from "./components/HoverMenu";

const ERROR_STATES = ["OPEN_AI_ERROR", "TIMEOUT"];

export default function BlockInline({
  block,
  retrievePrompt,
  defaultIndex,
}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const guidanceCount = block.guidance_aggregate.aggregate.count;
  const isError = ERROR_STATES.includes(block.status);
  const showLoading = !block.output && !isError && !block.is_manual_overwrite;
  return (
    <Draggable
      draggableId={block.id}
      index={block?.index || defaultIndex}
      key={block?.index}
    >
      {(provided: any) => (
        <Flex role="group" ref={provided.innerRef} {...provided.draggableProps}>
          <HoverMenu {...{ block, provided, retrievePrompt, onOpen }} />
          <AccordionItem w="100%">
            {({ isExpanded }) => (
              <>
                <Collapsed {...{ isExpanded, block, guidanceCount }} />
                <AccordionPanel p="0">
                  <Expanded {...{ block, showLoading, isError }} />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <Box w={"70px"} minW={"70px"} />
          <Modal isCentered size="5xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <BlockModal bg="#fbf7f6" onClose={onClose} blockID={block.id} />
          </Modal>
        </Flex>
      )}
    </Draggable>
  );
}
