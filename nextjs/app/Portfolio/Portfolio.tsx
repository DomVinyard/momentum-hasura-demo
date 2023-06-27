import {
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  useDeletePortfolioMutation,
  useGetPortfolioQuery,
} from "../../generated/graphql";

export default function Portfolio() {
  const router = useRouter();

  const [deletePortfolio] = useDeletePortfolioMutation({
    refetchQueries: ["GetPortfolios"],
  });

  const { data } = useGetPortfolioQuery({
    variables: { portfolioID: router.query.id },
  });
  const portfolio = data?.portfolios_by_pk;
  return (
    <Box pt={16}>
      <Button
        onClick={() => {
          deletePortfolio({ variables: { portfolioID: router.query.id } });
          router.push("/");
        }}
        colorScheme="red"
      >
        Delete Portfolio
      </Button>
      <Heading>{portfolio?.name}</Heading>
    </Box>
  );
}
