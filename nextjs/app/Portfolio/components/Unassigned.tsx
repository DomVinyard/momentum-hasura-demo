import {
  Box,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  useAssignToPortfolioMutation,
  useGetPortfoliosQuery,
  useGetUnassignedQuery,
} from "../../../generated/graphql";
import { BiChevronDown } from "react-icons/bi";
import { useSession } from "next-auth/react";
import PersonList from "./PersonList";

export default function Unassigned() {
  const { data: session } = useSession();
  const { data, loading } = useGetUnassignedQuery();
  const { data: portfolioData, loading: portfoliosLoading } =
    useGetPortfoliosQuery({
      variables: { ownerID: session?.user?.id },
    });
  const unassigned = data?.CRMDonors?.filter(
    (donor) => !donor?.momentum?.portfolio_id
  );
  const [assignToPortfolio] = useAssignToPortfolioMutation({
    refetchQueries: ["GetUnassigned", "GetPortfolios", "GetPortfolio"],
  });
  const org = portfolioData?.users_by_pk?.orgs?.[0]?.org;
  if (loading || portfoliosLoading) return "Loading...";
  return (
    <Box pt={16}>
      <Heading>Unassigned</Heading>
      <PersonList
        people={unassigned}
        Actions={({ crmID }: any) => {
          if (!org?.portfolios?.length) return null;
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
                    key={portfolio.id}
                    onClick={() => {
                      assignToPortfolio({
                        variables: { crmID, portfolioID: portfolio.id },
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
