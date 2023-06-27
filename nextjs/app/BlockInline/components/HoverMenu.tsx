import { Box, Button, Flex, Skeleton } from "@chakra-ui/react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { GrEdit } from "react-icons/gr";
import AddBlockPopover from "./AddBlockPopover";

export const OutputLoadingSkeleton = () => (
  <Flex mt={2}>
    <Skeleton mr={2} w={120} h={3} />
    <Skeleton mr={2} w={65} h={3} />
    <Skeleton mr={2} w={150} h={3} />
  </Flex>
);

export default function HoverMenu({
  block,
  provided,
  retrievePrompt,
  onOpen,
}: any) {
  return (
    <Flex w={"70px"} minW={"70px"} mr={1} ml={-4}>
      <Box
        display="none"
        _groupHover={{ display: "flex" }}
        opacity={0.5}
        pt={"5px"}
      >
        <Box
          w={"16px"}
          pt={"5px"}
          minW={"16px"}
          textAlign={"center"}
          {...provided.dragHandleProps}
        >
          <RxDragHandleDots2 size="18px" />
        </Box>
        <Box w={"25px"} minW={"25px"} textAlign={"center"}>
          <AddBlockPopover block={block} retrievePrompt={retrievePrompt} />
        </Box>
        <Box w={"25px"} minW={"25px"} textAlign={"center"}>
          <Button size={"xs"} variant={"ghost"} onClick={onOpen}>
            <GrEdit size="15px" />
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
