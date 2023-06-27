import {
  Box,
  Button,
  Stack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  Select,
  Heading,
  ModalCloseButton,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import {
  useAddBlockMutation,
  useAddDocumentMutation,
} from "../../../generated/graphql";
import useSessionStorageState from "use-session-storage-state";
import { useRouter } from "next/router";
import regenerateBlock from "../../../actions/regenerateBlock";
import refreshSuggestions from "../../../actions/refreshSuggestions";
import getBlockGuidance from "../../../actions/getBlockGuidance";
import generateTitle from "../../../actions/generateTitle";
import getDocumentGuidance from "../../../actions/getDocumentGuidance";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Template, templates } from "../../../lib/templates";

export default function NewDocumentModal({ isOpen, onClose, setLoading }: any) {
  const { data: session } = useSession();

  const router = useRouter();
  const [addDocument] = useAddDocumentMutation({
    refetchQueries: ["GetDocuments"],
  });

  const [addBlock] = useAddBlockMutation({
    refetchQueries: ["GetDocument", "GetDocuments"],
  });

  const addNew = async () => {
    onClose();
    router.push(`/?state=newdoc`);
    setLoading(true);
    const title = await generateTitle(prompt);
    const ownerID = session?.user?.id;
    const response = await addDocument({
      variables: { ownerID, prompt, title, template: selectedTemplate },
    });
    const newDoc = response.data?.insert_documents_one;
    if (!newDoc) return;
    const docGuidance = getDocumentGuidance({ documentID: newDoc.id, prompt });
    const refresh = refreshSuggestions({ refreshSuggestions: newDoc.id });
    const newBlock = await addBlock({
      variables: {
        documentID: newDoc.id,
        prompt: selectedTemplate?.common_sections?.[0] || "Introduction",
        index: 0,
        is_manual_overwrite: false,
        output: "",
        type: "ai-text",
      },
    });
    const newBlockID = newBlock.data?.insert_blocks?.returning?.[0]?.id;
    const blockGuidance = getBlockGuidance({ blockID: newBlockID });
    const regen = regenerateBlock({
      blockID: newBlockID,
      documentID: newDoc.id,
    });
    router.push(`/doc/${newDoc.id}`);
    await Promise.all([refresh, regen, blockGuidance, docGuidance]);
    setLoading(false);
  };

  const [prompt, setPrompt] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useSessionStorageState<
    Template | undefined
  >("selectedTemplate", { defaultValue: templates[0] });

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNew();
          }}
        >
          <ModalCloseButton />
          <Stack p={8}>
            <Heading fontSize={"2xl"}>Add Portfolio</Heading>
            <Text>What do you want to call your portfolio?</Text>
            <Input
              placeholder={`My Portfolio...`}
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            />
          </Stack>
          <ModalFooter>
            <Button type="submit" colorScheme="blue">
              Create
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
