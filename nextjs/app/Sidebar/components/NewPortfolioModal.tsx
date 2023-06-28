import {
  Button,
  Stack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { useAddPortfolioMutation } from "../../../generated/graphql";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewDocumentModal({ isOpen, onClose, orgID }: any) {
  const router = useRouter();
  const [addPortfolio] = useAddPortfolioMutation({
    refetchQueries: ["GetPortfolios"],
  });
  const addNew = async () => {
    onClose();
    const newPortfolio = await addPortfolio({
      variables: {
        name,
        org_id: orgID,
      },
    });
    router.push(`/portfolio/${newPortfolio.data?.insert_portfolios_one?.id}`);
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
