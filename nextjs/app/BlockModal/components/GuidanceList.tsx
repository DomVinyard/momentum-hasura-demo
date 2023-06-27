import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useAddGuidanceMutation } from "../../../generated/graphql";
import { GiLightBulb } from "react-icons/gi";
import regenerateBlock from "../../../actions/regenerateBlock";
import { useState } from "react";
import GuidanceItem from "../components/GuidanceItem";

export default function GuidanceList({ guidance, blockID, documentID }: any) {
  const [customGuidance, setCustomGuidance] = useState("");
  const [addGuidance] = useAddGuidanceMutation();

  const customGuidanceList =
    guidance?.filter(({ type }: any) => type === "CUSTOM") || [];

  const onAddGuidance = async () => {
    await addGuidance({
      variables: { parentID: blockID, prompt: customGuidance },
    });
    await regenerateBlock({ blockID, documentID });
    setCustomGuidance("");
  };

  return (
    <Box>
      <Heading pt={0} mb={2} color="#7A5CCE" fontSize={"xs"}>
        Guidance
      </Heading>
      {customGuidanceList?.map((guidance: any) => (
        <GuidanceItem
          guidance={guidance}
          blockID={blockID}
          documentID={documentID}
        />
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddGuidance();
          setCustomGuidance("");
        }}
      >
        <InputGroup colorScheme="purple" mt={0} alignItems={"center"}>
          <InputLeftElement pointerEvents="none" w={4} h="100%">
            <GiLightBulb color="#7A5CCE" size={"15px"} />
          </InputLeftElement>
          <Input
            color="#333"
            colorScheme="purple"
            pl={6}
            variant="flushed"
            placeholder={`Type guidance and press return...`}
            onChange={(e: any) => setCustomGuidance(e.target.value)}
            size={"sm"}
            value={customGuidance}
            flexGrow="1"
          />
        </InputGroup>
      </form>
    </Box>
  );
}
