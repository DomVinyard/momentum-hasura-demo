import { Box, Heading, Button, Flex } from "@chakra-ui/react";
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
  const { data } = useGetPortfolioQuery({
    variables: { portfolioID },
    fetchPolicy: "cache-and-network",
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

      <PersonList
        people={portfolio?.members.map(({ donor }) => donor)}
        Actions={({ infoID }: any) => {
          return (
            <Button
              colorScheme="blue"
              onClick={() => {
                router.push(`/portfolio/${portfolioID}/donor/${infoID}`);
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
