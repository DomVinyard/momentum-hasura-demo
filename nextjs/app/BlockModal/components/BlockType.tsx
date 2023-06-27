import { Flex, Heading } from "@chakra-ui/react";
import { BsFillBoxFill } from "react-icons/bs";

const TypesMap = {
  "ai-text": "AI Text",
  "plain-text": "Plain Text",
  image: "Image",
  embed: "Embed",
  quiz: "Quiz",
  unknown: "Unknown",
} as any;

export default function BlockType({ blockType, loading }: any) {
  return (
    <Flex mb={2} justifyContent={"space-between"} w={"100%"}>
      <Flex mt={0} alignItems={"center"}>
        <BsFillBoxFill size={"44px"} opacity={1} />
        <Heading ml={2} fontSize={"xl"}>
          {loading ? "" : TypesMap[blockType || "unknown"]}
        </Heading>
      </Flex>
    </Flex>
  );
}
