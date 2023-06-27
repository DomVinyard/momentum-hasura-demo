import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  useAddGuidanceMutation,
  useDeleteDocumentMutation,
  useDeleteGuidanceMutation,
  useGetDocumentSubscription,
  useToggleEnabledMutation,
  useUpdateDocumentMutation,
  useUpdateDocumentSummaryMutation,
} from "../../../generated/graphql";
import { BiCheckbox, BiCheckboxChecked, BiPencil } from "react-icons/bi";
import { GiLightBulb, GiTrashCan } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import regenerateBlock from "../../../actions/regenerateBlock";
import { useState } from "react";
import refreshSuggestions from "../../../actions/refreshSuggestions";
import { IoDocumentText } from "react-icons/io5";
import { useRouter } from "next/router";
import generateDocumentSummary from "../../../actions/generateDocumentSummary";
import generateTitle from "../../../actions/generateTitle";
import { MdFileDownloadDone } from "react-icons/md";
import LoadingSkeleton from "../../BlockInline/components/LoadingSkeleton";

export default function DocumentModal({ isOpen, onClose, documentID }: any) {
  const { data, loading } = useGetDocumentSubscription({
    variables: { documentID: documentID },
  });

  const [isDirty, setIsDirty] = useState(false);

  const [addGuidance] = useAddGuidanceMutation({});
  const [deleteGuidance] = useDeleteGuidanceMutation({});
  const [toggleEnabled] = useToggleEnabledMutation({});
  const [deleteDocument] = useDeleteDocumentMutation({
    refetchQueries: ["GetDocuments"],
  });
  const [updateDocument] = useUpdateDocumentMutation({
    refetchQueries: ["GetDocuments"],
  });
  const [updateDocumentSummary] = useUpdateDocumentSummaryMutation({});

  const [documentSummary, setDocumentSummary] = useState(
    data?.document?.summary
  );
  const [titleLoading, setTitleLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [customGuidance, setCustomGuidance] = useState("");

  const router = useRouter();

  const requestDocumentSummary = async (topic: string) => {
    const response: string = await generateDocumentSummary({ topic });
    await updateDocumentSummary({
      variables: { documentID: documentID, summary: response },
    });
    setDocumentSummary(response);
  };

  const regenerateAllBlocks = async () => {
    const blocks = data?.document?.blocks;
    await Promise.all(
      blocks
        ?.filter(({ is_manual_overwrite }) => !is_manual_overwrite)
        ?.map(({ id }) =>
          regenerateBlock({
            blockID: id,
            skipGenerateSuggestions: true,
          })
        ) || []
    );
    await refreshSuggestions({ documentID: documentID });
  };

  const onAddGuidance = async () => {
    setIsDirty(true);
    await addGuidance({
      variables: { parentID: documentID, prompt: customGuidance },
    });
    setCustomGuidance("");
  };

  const toggleGuidance = async ({ guidance }: any) => {
    setIsDirty(true);
    await toggleEnabled({
      variables: {
        guidanceID: guidance.id,
        state: !guidance.is_enabled,
      },
    });
  };

  const onPromptChange = async (prompt: string) => {
    setTitleLoading(true);
    setSummaryLoading(true);
    const title = await generateTitle(prompt);
    await updateDocument({
      variables: { documentID: documentID, prompt, title },
    });
    setTitleLoading(false);
    await requestDocumentSummary(prompt);
    setSummaryLoading(false);

    await regenerateAllBlocks();
  };

  const document = data?.document;

  return (
    <Modal isCentered size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <Flex h={"65vh"} minH={"65vh"} maxH="65vh">
          <Box overflow={"scroll"} flex={1} mt={0}>
            <ModalHeader />
            <ModalCloseButton />
            <ModalBody>
              <Flex mb={10} mt={0} alignItems={"center"}>
                <IoDocumentText size={"32px"} opacity={1} />
                <Heading ml={2} fontSize={"xl"}>
                  {document?.template.title}
                </Heading>
              </Flex>
              {loading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  <Box fontSize="lg" mb={1}>
                    <Heading pt={0} mb={1} color="#555" fontSize={"xs"}>
                      Topic
                    </Heading>
                  </Box>
                  <Box fontSize="lg">
                    {document?.prompt}
                    {
                      <Button
                        size={"xs"}
                        ml={1}
                        onClick={async () => {
                          const prompt = window.prompt(
                            "What is the topic for this document?",
                            data?.document?.prompt
                          );
                          if (!prompt) return;
                          await onPromptChange(prompt);
                        }}
                      >
                        <BiPencil /> Edit
                      </Button>
                    }
                  </Box>
                </>
              )}
              {!loading && (
                <Box mt={8}>
                  <Box>
                    <Heading pt={0} mb={2} color="#7A5CCE" fontSize={"xs"}>
                      Guidance
                    </Heading>
                    {document?.guidance
                      .filter(({ type }: any) => type === "CUSTOM")
                      .map((guidance: any) => (
                        <Flex
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
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
                              textDecoration={
                                guidance.is_enabled ? "none" : "line-through"
                              }
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
                              }}
                            >
                              <GrClose opacity={0.4} size={"15px"} />
                            </Button>
                          </Flex>
                        </Flex>
                      ))}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        onAddGuidance();
                        setCustomGuidance("");
                      }}
                    >
                      <InputGroup
                        colorScheme="purple"
                        mt={0}
                        alignItems={"center"}
                      >
                        <InputLeftElement pointerEvents="none" w={4} h="100%">
                          <GiLightBulb color="#7A5CCE" size={"15px"} />
                        </InputLeftElement>
                        <Input
                          color="#333"
                          colorScheme="purple"
                          pl={6}
                          variant="flushed"
                          placeholder={`Add guidance...`}
                          onChange={(e: any) => {
                            setCustomGuidance(e.target.value);
                          }}
                          size={"sm"}
                          value={customGuidance}
                          flexGrow="1"
                        />
                      </InputGroup>
                    </form>
                  </Box>
                  <Stack mt={8} pt={6} spacing={0}>
                    {isDirty && (
                      <Box>
                        <Button
                          variant="ghost"
                          size={"md"}
                          padding={0}
                          colorScheme="green"
                          mr={3}
                          onClick={async () => {
                            onClose();
                            const confirm = window.confirm(
                              "This will regenerate all unlocked AI Text blocks. Are you sure?"
                            );
                            if (!confirm) return;
                            await regenerateAllBlocks();
                            setIsDirty(false);
                          }}
                        >
                          <MdFileDownloadDone size={"19px"} />
                          <Text fontWeight={"normal"} ml={1}>
                            Regenerate Blocks
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
                          const confirm = window.confirm(
                            "Are you sure you want to delete this document?"
                          );
                          if (!confirm) return;
                          router.push("/");
                          deleteDocument({
                            variables: { documentID: documentID },
                          });
                          onClose();
                        }}
                      >
                        <GiTrashCan size={"19px"} />
                        <Text fontWeight={"normal"} ml={1}>
                          Delete Document
                        </Text>
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              )}
            </ModalBody>
          </Box>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
