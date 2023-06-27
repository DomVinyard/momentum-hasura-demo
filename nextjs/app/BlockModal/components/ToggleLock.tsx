import { Text, Flex, Switch, FormControl } from "@chakra-ui/react";
import { useToggleOverwriteMutation } from "../../../generated/graphql";
import { BsLockFill } from "react-icons/bs";
import regenerateBlock from "../../../actions/regenerateBlock";

export default function ToggleAI({
  isLocked,
  blockID,
}: {
  isLocked: boolean;
  blockID: string;
}) {
  const [toggleOverwrite] = useToggleOverwriteMutation();

  return (
    <Flex>
      <FormControl display="flex" alignItems="center">
        <Switch
          mr={2}
          id="email-alerts"
          size={"sm"}
          isChecked={isLocked}
          onChange={async () => {
            if (isLocked) {
              const didConfirm = window.confirm(
                "Are you sure you want to switch to AI mode? This will overwrite any manual changes you've made."
              );
              if (!didConfirm) return;
            }
            await toggleOverwrite({
              variables: {
                blockID: blockID,
                isOverwrite: !isLocked,
              },
            });
            if (isLocked) {
              await regenerateBlock({ blockID });
            }
          }}
        />
        {isLocked ? (
          <Text color="#999">Locked (AI disabled)</Text>
        ) : (
          <Flex alignItems={"center"}>
            <BsLockFill size={"15px"} />
            <Text>Lock</Text>
          </Flex>
        )}
      </FormControl>
    </Flex>
  );
}
