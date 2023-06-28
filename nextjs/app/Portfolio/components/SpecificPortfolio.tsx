import { Box, Heading, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  useDeletePortfolioMutation,
  useGetPortfolioQuery,
} from "../../../generated/graphql";
import PersonList from "./PersonList";

export default function SpecificPortfolio() {
  const router = useRouter();
  const { portfolioID } = router.query;
  const [deletePortfolio] = useDeletePortfolioMutation({
    refetchQueries: ["GetPortfolios"],
  });
  const { data, loading, error } = useGetPortfolioQuery({
    variables: { portfolioID },
    fetchPolicy: "cache-and-network",
  });
  const portfolio = data?.portfolios_by_pk;

  if (!data && loading) return "Loading...";
  console.log({ data, error });

  return (
    <Box pt={16}>
      <Flex justifyContent="flex-end" mb={2}>
        <Button
          onClick={() => {
            if (portfolio?.members?.length) {
              const sure = confirm(
                `If you delete this portfolio, ${portfolio?.members?.length} donors will be unassigned. Are you sure?`
              );
              if (!sure) return;
            }
            deletePortfolio({ variables: { portfolioID } });
            router.push("/");
          }}
          colorScheme="red"
        >
          Delete Portfolio
        </Button>
      </Flex>
      <Heading>{portfolio?.name}</Heading>

      {!portfolio?.members?.length && <Text pt={8}>No members yet</Text>}

      <PersonList
        people={portfolio?.members.map(({ crm }) => crm)}
        Actions={({ momentumID }: any) => {
          return (
            <Button
              colorScheme="blue"
              onClick={() => {
                router.push(`/portfolio/${portfolioID}/donor/${momentumID}`);
              }}
            >
              View
            </Button>
          );
        }}
      />
    </Box>
  );
}
