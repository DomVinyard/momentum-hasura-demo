import {
  Text,
  Button,
  Flex,
  Heading,
  Stack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import HamburgerMenu from "./components/HamburgerMenu";
import { useRouter } from "next/router";
import { BiAddToQueue } from "react-icons/bi";
import NewDocumentModal from "./components/NewPortfolioModal";
import { useGetPortfoliosQuery } from "../../generated/graphql";
import NoOrg from "./components/NoOrg";

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
  const org = data?.users_by_pk?.orgs?.[0]?.org;
  if (!loading && !data?.users_by_pk?.name) {
    return signOut();
  }
  if (!loading && !org) return <NoOrg />;
  const isUnassigned = "unassigned" === router.query.portfolioID;
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
        orgID={org?.id}
      />
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <HamburgerMenu org={org?.name} />
        <Button colorScheme="blue" onClick={onNewDocumentModalOpen} size="sm">
          <BiAddToQueue size={"18px"} />
        </Button>
      </Flex>
      <Heading pt={10} color="#555" fontSize={"xs"}>
        Donors
      </Heading>
      <Link href={`/portfolio/unassigned`}>
        <Box
          px={3}
          pt={2}
          pb={1}
          borderRadius={"10px"}
          bg={isUnassigned ? "#EBFBFF" : "#FFFFFF"}
          border={isUnassigned ? "1px solid #00C2FF" : "1px solid #fff"}
        >
          <Stack spacing={1}>
            <Text fontSize={"sm"}>Unassigned</Text>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Flex alignItems={"center"}></Flex>
            </Flex>
          </Stack>
        </Box>
      </Link>
      <Heading pt={10} color="#555" fontSize={"xs"}>
        Portfolios
      </Heading>
      <Stack>
        {org?.portfolios.map((portfolio) => {
          const isSelected = portfolio.id === router.query.portfolioID;
          return (
            <Link href={`/portfolio/${portfolio.id}`} key={portfolio.id}>
              <Box
                key={portfolio.id}
                bg={isSelected ? "#EBFBFF" : "#FFFFFF"}
                border={isSelected ? "1px solid #00C2FF" : "1px solid #fff"}
                px={3}
                pt={2}
                pb={1}
                borderRadius={"10px"}
              >
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Text fontSize={"sm"}>{portfolio.name}</Text>
                  <Text
                    fontSize={"xs"}
                    color="blue"
                    fontWeight={"bold"}
                    opacity={0.6}
                  >
                    {portfolio.members_aggregate.aggregate?.count || 0}
                  </Text>
                </Flex>
              </Box>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
}
