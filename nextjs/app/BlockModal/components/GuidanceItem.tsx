import { Button, Text, Flex } from "@chakra-ui/react";
import {
  useDeleteGuidanceMutation,
  useToggleEnabledMutation,
} from "../../../generated/graphql";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { GiLightBulb } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import regenerateBlock from "../../../actions/regenerateBlock";

export default function GuidanceItem({ documentID, blockID, guidance }: any) {
  const [deleteGuidance] = useDeleteGuidanceMutation();
  const [toggleEnabled] = useToggleEnabledMutation();

  const toggleGuidance = async ({ guidance }: any) => {
    await toggleEnabled({
      variables: {
        guidanceID: guidance.id,
        state: !guidance.is_enabled,
      },
    });
    await regenerateBlock({ blockID, documentID });
  };

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex alignItems={"center"}>
        <GiLightBulb color="#7A5CCE" size={"15px"} />
        <Button
          size="xs"
          padding="0"
          mx={1}
          variant={"ghost"}
          onClick={async () => {
            await toggleGuidance({ guidance });
          }}
        >
          {guidance.is_enabled ? (
            <BiCheckboxChecked size="22px" />
          ) : (
            <BiCheckbox size="22px" />
          )}
        </Button>
        <Text
          color="#333"
          key={guidance.id}
          opacity={guidance.is_enabled ? "1" : "0.5"}
          textDecoration={guidance.is_enabled ? "none" : "line-through"}
          cursor={"pointer"}
          onClick={async () => {
            await toggleGuidance({ guidance });
          }}
        >
          {guidance.prompt}
        </Text>
      </Flex>

      <Flex alignItems={"center"}>
        <Button
          size="xs"
          variant={"ghost"}
          onClick={async () => {
            await deleteGuidance({
              variables: { guidanceID: guidance.id },
            });
            if (guidance.is_enabled)
              await regenerateBlock({ blockID, documentID });
          }}
        >
          <GrClose opacity={0.4} size={"15px"} />
        </Button>
      </Flex>
    </Flex>
  );
}
