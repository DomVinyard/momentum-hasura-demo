import { Text, Flex, Select } from "@chakra-ui/react";
import { useUpdateBlockLengthMutation } from "../../../generated/graphql";
import regenerateBlock from "../../../actions/regenerateBlock";

export default function LengthSelect({ blockID, blockLength }: any) {
  const [updateBlockLength] = useUpdateBlockLengthMutation();

  return (
    <Flex mb={8}>
      <Text fontSize={"xs"} color="#7A5CCE" fontWeight={"bold"}>
        Length:
      </Text>
      <Select
        onChange={async (e) => {
          await updateBlockLength({
            variables: {
              blockID,
              newLength: `${e.target.value}`,
            },
          });
          regenerateBlock({ blockID });
        }}
        colorScheme="purple"
        color="#7A5CCE"
        mt={"-2px"}
        ml={1}
        maxW={"80px"}
        size={"xs"}
        variant={"flushed"}
        value={blockLength}
      >
        <option value={"short"}>Short</option>
        <option value={"medium"}>Medium</option>
        <option value={"long"}>Long</option>
      </Select>
    </Flex>
  );
}
