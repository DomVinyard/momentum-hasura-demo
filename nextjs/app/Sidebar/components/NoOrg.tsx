import { Text, Button, Center } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import {
  useAddPortfolioMutation,
  useAssignOrgMutation,
  useCreateOrgMutation,
} from "../../../generated/graphql";

export default function NoOrg() {
  const { data: session } = useSession();
  const [createOrg] = useCreateOrgMutation();
  const [assignOrg] = useAssignOrgMutation({
    refetchQueries: ["GetPortfolios"],
  });
  const [addPortfolio] = useAddPortfolioMutation({
    refetchQueries: ["GetPortfolios"],
  });

  return (
    <Center pt={32} flexDir={"column"} w={"100vw"}>
      <Text>No org found</Text>
      <Button
        onClick={async () => {
          const orgName = prompt("Enter org name");
          if (!orgName) return;
          const newOrg = await createOrg({ variables: { name: orgName } });
          const newOrgID = newOrg.data?.insert_orgs_one?.id;
          await assignOrg({
            variables: { orgID: newOrgID, userID: session?.user?.id },
          });
          await addPortfolio({
            variables: { name: "Test Portfolio", org_id: newOrgID },
          });
        }}
        mt={8}
        colorScheme="blue"
      >
        Create Org
      </Button>
    </Center>
  );
}
