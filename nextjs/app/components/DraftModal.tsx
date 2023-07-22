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

export default function DraftModal({
  donor,
  isOpen,
  onClose,
  options,
  generatingOptions,
}: any) {
  const [draft, setDraft] = useState(null);
  const [generatingDraft, setGeneratingDraft] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const getDraft = async (option: string) => {
    if (!donor) return;
    setGeneratingDraft(true);
    setSelectedOption(option as any);
    const res = await fetch(
      `/api/generate-draft?userID=${donor?.id}&draft=${option}`
    );
    const data = await res.json();
    setDraft(data.response);
    setGeneratingDraft(false);
  };
  return (
    <>
      <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h={"600px"}>
          <ModalHeader>New Email</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="0" borderY={"1px solid #aaa"}>
            <Flex>
              <Box
                width="400px"
                h={"462px"}
                borderRight={"1px solid #ccc"}
                overflow={"scroll"}
              >
                {generatingOptions && (
                  <Center h={"100%"} fontSize={"sm"} color="#666">
                    Generating options...
                  </Center>
                )}
                {options?.map((option) => (
                  <Box
                    p={4}
                    borderBottom={"1px solid #ccc"}
                    cursor="pointer"
                    onClick={() => {
                      getDraft(option);
                    }}
                    bg={selectedOption === option ? "#E1EBF8" : "#fff"}
                  >
                    <Text fontSize="sm">{option}</Text>
                  </Box>
                ))}
              </Box>
              <Box
                whiteSpace={"pre-wrap"}
                p={8}
                bg="#fafafa"
                w="100%"
                overflow="scroll"
                h={"462px"}
              >
                {generatingDraft ? "Generating draft..." : draft}
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                // new mailto with draft
                const mailto = `mailto:${donor?.email}?subject=${selectedOption}&body=${draft}`;

                // open mailto in new tab
                window.open(mailto);
              }}
            >
              Edit Draft
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
