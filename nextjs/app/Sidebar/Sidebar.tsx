import {
  Text,
  Button,
  Flex,
  Heading,
  Stack,
  Box,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import HamburgerMenu from "./components/HamburgerMenu";
import {
  useAddBlockMutation,
  useAddDocumentMutation,
  useGetDocumentsQuery,
} from "../../generated/graphql";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFillBoxFill } from "react-icons/bs";
import ReactTimeago from "react-timeago";
import getDateFromEpoch from "../../lib/getDateFromEpoch";
import regenerateBlock from "../../actions/regenerateBlock";
import { capitalise } from "../../util/util";
import refreshSuggestions from "../../actions/refreshSuggestions";
import { BiCommentAdd, BiGlobe } from "react-icons/bi";
import getBlockGuidance from "../../actions/getBlockGuidance";
import generateTitle from "../../actions/generateTitle";
import { GiGlobe } from "react-icons/gi";
import getDocumentGuidance from "../../actions/getDocumentGuidance";
import NewDocumentModal from "./components/NewDocumentModal";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const router = useRouter();
  const [addDocument] = useAddDocumentMutation({
    refetchQueries: ["GetDocuments"],
  });

  const [addBlock] = useAddBlockMutation({
    refetchQueries: ["GetDocument", "GetDocuments"],
  });

  const {
    isOpen: isNewDocumentModalOpen,
    onOpen: onNewDocumentModalOpen,
    onClose: onNewDocumentModalClose,
  } = useDisclosure();

  const { data: session } = useSession();
  const { data, loading } = useGetDocumentsQuery({
    variables: { ownerID: session?.user?.id },
  });
  const [isLoading, setLoading] = useState(router.query.state === "newdoc");

  const getLoading = () => {
    const isNewdoc = router.query.state === "newdoc";
    return (
      <Box
        bg={isNewdoc ? "#EBFBFF" : "#FFFFFF"}
        border={isNewdoc ? "1px solid #00C2FF" : "1px solid #fff"}
        p={3}
        borderRadius={"12px"}
      >
        <Spinner />
      </Box>
    );
  };
  return (
    <Stack
      w={280}
      position={"fixed"}
      bg="#F1EBE9"
      px={4}
      py={2}
      h={"100vh"}
      overflow={"scroll"}
    >
      <NewDocumentModal
        isOpen={isNewDocumentModalOpen}
        onOpen={onNewDocumentModalOpen}
        onClose={onNewDocumentModalClose}
        setLoading={setLoading}
      />
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <HamburgerMenu />
        <Button colorScheme="blue" onClick={onNewDocumentModalOpen} size="sm">
          <BiCommentAdd size={"18px"} />
        </Button>
      </Flex>
      <Heading pt={10} color="#555" fontSize={"xs"}>
        Documents
      </Heading>
      <Stack>
        {(isLoading || loading) && getLoading()}
        {!data?.users_by_pk?.documents.length && !loading && !isLoading && (
          <Text fontSize={"sm"}>No documents yet.</Text>
        )}
        {data?.users_by_pk?.documents.map((doc) => {
          const isSelected = doc.id === router.query.id;
          return (
            <Link href={`/doc/${doc.id}`}>
              <Box
                key={doc.id}
                bg={isSelected ? "#EBFBFF" : "#FFFFFF"}
                border={isSelected ? "1px solid #00C2FF" : "1px solid #fff"}
                px={3}
                pt={2}
                pb={1}
                borderRadius={"10px"}
              >
                <Stack spacing={1}>
                  <Text fontSize={"sm"}>{doc.title}</Text>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Flex alignItems={"center"}>
                      <BsFillBoxFill size="12px" />
                      <Text fontSize="xs" mx={1} fontWeight={"bold"}>
                        {doc?.blocks_aggregate?.aggregate?.count || 0}
                      </Text>
                    </Flex>
                    <Text fontWeight={"normal"} fontSize={"xs"} color="#aaa">
                      <ReactTimeago
                        date={doc.created_at}
                        formatter={(
                          value,
                          unit,
                          suffix,
                          epoch,
                          defaultFormat
                        ) => {
                          if (!defaultFormat) return;
                          const label = defaultFormat(
                            value,
                            unit,
                            suffix,
                            epoch
                          );
                          const recentDate = getDateFromEpoch(epoch);
                          if (recentDate) return recentDate;
                          return label;
                        }}
                      />
                      {doc?.is_public && (
                        <BiGlobe
                          size="14px"
                          color="#48835D"
                          style={{
                            display: "inline",
                            marginBottom: "-2px",
                            marginLeft: "2px",
                          }}
                        />
                      )}
                    </Text>
                  </Flex>
                </Stack>
              </Box>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
}
