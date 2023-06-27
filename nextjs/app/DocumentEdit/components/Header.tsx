import { useRouter } from "next/router";
import {
  Button,
  Flex,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import { GiLightBulb, GiShare } from "react-icons/gi";
import { BiGlobe } from "react-icons/bi";
import { ShareModal } from "./ShareModal";
import DocumentModal from "./CustomiseDocumentModal";

export default function Header({ isPublic, guidanceCount, documentID }: any) {
  const {
    isOpen: isShareOpen,
    onOpen: onShareOpen,
    onClose: onShareClose,
  } = useDisclosure();

  const {
    isOpen: isEditDocumentModalOpen,
    onOpen: onEditDocumentModalOpen,
    onClose: onEditDocumentModalClose,
  } = useDisclosure();
  const router = useRouter();

  const CloseButton = () => {
    return (
      <Flex justifyContent={"flex-end"}>
        <IconButton
          rounded={"full"}
          onClick={async () => router.push("/")}
          aria-label="Go back"
          icon={<GrClose />}
        />
      </Flex>
    );
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Flex alignItems={"center"} mt={2}>
        <Button
          display="inline"
          size="xs"
          onClick={onEditDocumentModalOpen}
          colorScheme={guidanceCount > 0 ? "purple" : "gray"}
          variant={guidanceCount > 0 ? "outline" : "solid"}
        >
          {guidanceCount > 0 ? (
            <Flex alignItems={"center"}>
              <GiLightBulb size={"12px"} />{" "}
              <Text ml={0.5}>{guidanceCount} document guidance</Text>
            </Flex>
          ) : (
            "Customise Document"
          )}
        </Button>
        <Button
          colorScheme="green"
          size="xs"
          variant={"outline"}
          ml={1}
          onClick={onShareOpen}
        >
          {isPublic ? <BiGlobe /> : <GiShare />}
          <Text ml={1} as="span">
            {isPublic ? "Public" : "Share"}
          </Text>
        </Button>
      </Flex>
      <CloseButton />
      <ShareModal
        isOpen={isShareOpen}
        onClose={onShareClose}
        documentID={documentID}
        isPublicDefault={isPublic}
      />
      <DocumentModal
        isOpen={isEditDocumentModalOpen}
        onClose={onEditDocumentModalClose}
        documentID={documentID}
      />
    </Flex>
  );
}
