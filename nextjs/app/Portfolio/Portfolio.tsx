import { Box, Heading, Button, Avatar, Center, Flex } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  useDeletePortfolioMutation,
  useGetPortfolioQuery,
  useGetUnassignedQuery,
} from "../../generated/graphql";

function PersonList({ people }: any) {
  return (
    <Table variant="striped" mt={8}>
      <Tbody>
        {people?.map((person: any) => (
          <Tr key={person.name}>
            <Td>
              <Flex alignItems="center">
                <Avatar
                  mr={2}
                  size="sm"
                  name={person.name}
                  src={person.info?.avatar}
                />
                {person.name}
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

function Unassigned() {
  const router = useRouter();
  const portfolioID = router.query.id;
  const { data, error, loading } = useGetUnassignedQuery();
  const unassigned = data?.donors?.filter(
    (donor) => !donor?.info?.portfolio_id
  );
  return (
    <Box pt={16}>
      <Heading>Unassigned</Heading>
      <PersonList people={unassigned} />
    </Box>
  );
}

function SpecificPortfolio() {
  const router = useRouter();
  const portfolioID = router.query.id;
  const [deletePortfolio] = useDeletePortfolioMutation({
    refetchQueries: ["GetPortfolios"],
  });
  const { data, error, loading } = useGetPortfolioQuery({
    variables: { portfolioID: router.query.id },
  });
  const portfolio = data?.portfolios_by_pk;
  return (
    <Box pt={16}>
      <Flex justifyContent="flex-end" mb={2}>
        <Button
          onClick={() => {
            deletePortfolio({ variables: { portfolioID } });
            router.push("/");
          }}
          colorScheme="red"
        >
          Delete Portfolio
        </Button>
      </Flex>
      <Heading>{portfolio?.name}</Heading>

      <PersonList people={portfolio?.members.map(({ donor }) => donor)} />
    </Box>
  );
}

export default function Portfolio() {
  const router = useRouter();
  const portfolioID = router.query.id;
  const showUnassigned = portfolioID === "unassigned";

  if (showUnassigned) {
    return <Unassigned />;
  }
  return <SpecificPortfolio />;
}
