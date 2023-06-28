import {
  Box,
  Heading,
  Button,
  Avatar,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  useAssignToPortfolioMutation,
  useDeletePortfolioMutation,
  useGetPortfolioQuery,
  useGetPortfoliosQuery,
  useGetUnassignedQuery,
} from "../../../generated/graphql";
import { BiChevronDown } from "react-icons/bi";
import { useSession } from "next-auth/react";
import PersonList from "./PersonList";

export default function Unassigned() {
  const router = useRouter();
  const { data: session } = useSession();
  const portfolioID = router.query.id;
  const { data, error, loading } = useGetUnassignedQuery();
  const { data: portfolioData } = useGetPortfoliosQuery({
    variables: { ownerID: session?.user?.id },
  });
  const unassigned = data?.donors?.filter(
    (donor) => !donor?.info?.portfolio_id
  );
  const [assignToPortfolio] = useAssignToPortfolioMutation({
    refetchQueries: ["GetUnassigned", "GetPortfolios", "GetPortfolio"],
  });
  const org = portfolioData?.users_by_pk?.orgs?.[0]?.org;
  return (
    <Box pt={16}>
      <Heading>Unassigned</Heading>
      <PersonList
        people={unassigned}
        Actions={({ crmID }: any) => {
          return (
            <Menu>
              <MenuButton
                colorScheme="blue"
                as={Button}
                rightIcon={<BiChevronDown />}
              >
                Assign
              </MenuButton>
              <MenuList>
                {org?.portfolios.map((portfolio) => (
                  <MenuItem
                    onClick={() => {
                      assignToPortfolio({
                        variables: {
                          crmID,
                          portfolioID: portfolio.id,
                        },
                      });
                    }}
                  >
                    {portfolio.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          );
        }}
      />
    </Box>
  );
}
