import { Box, Button, Text } from "@chakra-ui/react";
import { useDeleteBlockMutation } from "../../../generated/graphql";
import { BiRefresh } from "react-icons/bi";
import { GiTrashCan } from "react-icons/gi";
import regenerateBlock from "../../../actions/regenerateBlock";

export default function Actions({ onClose, blockID, isLocked }: any) {
  const [deleteBlock] = useDeleteBlockMutation({
    refetchQueries: ["GetDocuments"],
  });

  return (
    <>
      {!isLocked && (
        <Box>
          <Button
            variant="ghost"
            size={"md"}
            padding={0}
            colorScheme="gray"
            mr={3}
            opacity={0.6}
            onClick={async () => {
              await regenerateBlock({ blockID });
            }}
          >
            <BiRefresh size={"19px"} />
            <Text fontWeight={"normal"} ml={1}>
              Regenerate Block
            </Text>
          </Button>
        </Box>
      )}
      <Box>
        <Button
          variant="ghost"
          size={"md"}
          padding={0}
          colorScheme="red"
          mr={3}
          onClick={async () => {
            await deleteBlock({ variables: { blockID } });
            onClose();
          }}
        >
          <GiTrashCan size={"19px"} />
          <Text fontWeight={"normal"} ml={1}>
            Delete Block
          </Text>
        </Button>
      </Box>
    </>
  );
}
