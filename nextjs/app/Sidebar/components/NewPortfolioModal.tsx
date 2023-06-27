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
import { useAddPortfolioMutation } from "../../../generated/graphql";
// import {
//   useAddBlockMutation,
//   useAddDocumentMutation,
// } from "../../../generated/graphql";
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

export default function NewDocumentModal({
  isOpen,
  onClose,
  setLoading,
  orgID,
}: any) {
  const router = useRouter();
  const [addPortfolio] = useAddPortfolioMutation({
    refetchQueries: ["GetPortfolios"],
  });
  const addNew = async () => {
    onClose();
    setLoading(true);
    const newPortfolio = await addPortfolio({
      variables: {
        name,
        org_id: orgID,
      },
    });
    router.push(`/portfolio/${newPortfolio.data?.insert_portfolios_one?.id}`);
    setLoading(false);
  };

  const [name, setName] = useState("");
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
