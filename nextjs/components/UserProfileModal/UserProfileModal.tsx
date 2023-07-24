"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import org from "../../mock_data/org";
import { useUserProfileModalQuery } from "../../generated/graphql";
import { useSession } from "next-auth/react";

export default function UserProfileModal({ isOpen, onClose }: any) {
  const { data: session } = useSession();
  const { data, loading, error } = useUserProfileModalQuery({
    variables: {
      userID: session?.user?.id,
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h={"600px"}>
          <ModalHeader>
            Your Profile
            <Text fontSize="2xs" color="#4880C8">
              We use this to give emails the correct voice
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={4} borderY={"1px solid #aaa"}>
            <Button size="xs">Add Info</Button>
            {data?.users_by_pk?.metadata?.about?.map((update: any) => (
              <Box key={update} py={2} borderBottom={"1px solid #ccc"}>
                <Box fontSize={"xs"}>{update}</Box>
              </Box>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
