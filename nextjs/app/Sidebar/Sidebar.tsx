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
import { useRouter } from "next/router";
import { useState } from "react";
import { BiAddToQueue, BiCommentAdd } from "react-icons/bi";
import NewDocumentModal from "./components/NewPortfolioModal";
import { useGetPortfoliosQuery } from "../../generated/graphql";

export default function Header() {
  const router = useRouter();

  const {
    isOpen: isNewDocumentModalOpen,
    onOpen: onNewDocumentModalOpen,
    onClose: onNewDocumentModalClose,
  } = useDisclosure();

  const { data: session } = useSession();
  const { data, loading } = useGetPortfoliosQuery({
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
  const org = data?.users_by_pk?.orgs?.[0]?.org;
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
        orgID={org?.id}
      />
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <HamburgerMenu org={org?.name} />
        <Button colorScheme="blue" onClick={onNewDocumentModalOpen} size="sm">
          <BiAddToQueue size={"18px"} />
        </Button>
      </Flex>
      <Heading pt={10} color="#555" fontSize={"xs"}>
        Portfolios
      </Heading>
      <Stack>
        {(isLoading || loading) && getLoading()}
        {org?.portfolios.map((portfolio) => {
          const isSelected = portfolio.id === router.query.id;
          return (
            <Link href={`/portfolio/${portfolio.id}`}>
              <Box
                key={portfolio.id}
                bg={isSelected ? "#EBFBFF" : "#FFFFFF"}
                border={isSelected ? "1px solid #00C2FF" : "1px solid #fff"}
                px={3}
                pt={2}
                pb={1}
                borderRadius={"10px"}
              >
                <Stack spacing={1}>
                  <Text fontSize={"sm"}>{portfolio.name}</Text>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Flex alignItems={"center"}></Flex>
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
