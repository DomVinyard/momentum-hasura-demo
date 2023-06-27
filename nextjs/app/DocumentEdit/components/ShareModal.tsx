import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Switch,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";
import { useUpdateDocumentVisibilityMutation } from "../../../generated/graphql";
import { useState } from "react";
import { BsGlobeAmericas } from "react-icons/bs";

export function ShareModal({
  isOpen,
  onClose,
  documentID,
  isPublicDefault,
}: any) {
  const [isPublic, setIsPublic] = useState(isPublicDefault);

  const [updateDocumentVisibility] = useUpdateDocumentVisibilityMutation({
    refetchQueries: [],
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sharing Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Center>
              <BsGlobeAmericas size="30px" color="grey" />
            </Center>
            <Box pl="8px">
              <Text fontSize="md">Share with the world?</Text>
              <Text fontSize="xs" color="grey">
                Anyone with the link can view
              </Text>
            </Box>
            <Flex direction="column" grow={1}>
              <Center h={"48px"} alignSelf="flex-end">
                <Switch
                  isChecked={isPublic}
                  onChange={() => {
                    setIsPublic(!isPublic);
                    updateDocumentVisibility({
                      variables: {
                        documentID,
                        visible: !isPublic,
                      },
                    });
                  }}
                />
              </Center>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme={isPublic ? "green" : "grey"}
            mr={3}
            isDisabled={!isPublic}
            onClick={() => {
              window.open(`/share/${documentID}`, "_blank");
            }}
          >
            View Link
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
