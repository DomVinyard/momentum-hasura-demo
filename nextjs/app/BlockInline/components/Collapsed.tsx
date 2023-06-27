import {
  Box,
  Text,
  Flex,
  Spinner,
  Center,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import { BsFillBoxFill, BsLockFill } from "react-icons/bs";
import "github-markdown-css/github-markdown-light.css";
import GuidanceCount from "./GuidanceCount";
import { BLOCK_TYPES } from "./AddBlockPopover";

function CollapsedLeft({
  isExpanded,
  block,
}: {
  isExpanded: boolean;
  block: any;
}) {
  const BarIconText = () => {
    const blockType = BLOCK_TYPES.find((b) => b.id === block.type);
    if (blockType) {
      return (
        <>
          <blockType.SmallIcon />
          <Text ml={1} fontSize="sm">
            {blockType.label}
          </Text>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <Box
        textAlign={"left"}
        flex={1}
        as="span"
        ml={0}
        color={isExpanded ? "#999" : "#000"}
        fontSize={"lg"}
      >
        {block.type !== "ai-text" ? (
          <Flex alignItems={"center"}>
            <BarIconText />
          </Flex>
        ) : (
          <Flex alignItems={"center"}>
            <Text>{block.prompt}</Text>
          </Flex>
        )}
      </Box>
    </>
  );
}

function CollapsedRight({
  block,
  guidanceCount,
}: {
  block: any;
  guidanceCount: number;
}) {
  return (
    <>
      {block.type === "ai-text" && block.is_manual_overwrite ? (
        <GuidanceCount Icon={BsLockFill} count={guidanceCount} />
      ) : block.status === "GENERATING" ? (
        <Spinner size="sm" />
      ) : (
        !!guidanceCount &&
        !block.is_manual_overwrite && <GuidanceCount count={guidanceCount} />
      )}
    </>
  );
}

export default function Collapsed({ isExpanded, block, guidanceCount }: any) {
  return (
    <Center w={"100%"} justifyContent={"space-between"}>
      <AccordionButton w={"56px"} pl={3} pr={0} py={"17px"} h={"30px"}>
        <BsFillBoxFill size={"13px"} />
        <AccordionIcon />
      </AccordionButton>
      <CollapsedLeft {...{ isExpanded, block, guidanceCount }} />
      <CollapsedRight {...{ block, guidanceCount }} />
    </Center>
  );
}
