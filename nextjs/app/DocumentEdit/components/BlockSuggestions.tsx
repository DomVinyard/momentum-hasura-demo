import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { BsBox } from "react-icons/bs";

export default function BlockSuggestions({
  suggestions,
  blocks,
  retrievePrompt,
}: any) {
  const existingPrompts = blocks?.map((b: any) => b.prompt);
  return (
    <Box ml={3}>
      {!!suggestions?.length && (
        <Heading pt={6} pb={2} color="#888" fontSize={"xs"}>
          Suggestions
        </Heading>
      )}
      {suggestions?.map((section: any) => {
        if (existingPrompts?.includes(section)) return null;
        return (
          <Flex
            alignItems={"center"}
            pl={0.5}
            mb={1}
            cursor={"pointer"}
            onClick={() => {
              retrievePrompt(section, blocks?.length ?? 0);
            }}
          >
            <BsBox />
            <Text
              ml={2}
              fontSize={"md"}
              color={"#999"}
              _hover={{ color: "#000" }}
            >
              {section}...
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
}
