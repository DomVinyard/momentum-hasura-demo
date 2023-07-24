import { Box, Button, Center } from "@chakra-ui/react";
// import { useAppQuery } from "../generated/graphql";
import org from "../../mock_data/org";
import users from "../../mock_data/users";
import {
  useAddContactsToOrgMutation,
  useAddUserToOrgMutation,
  useCreateOrgMutation,
} from "../../generated/graphql";
import { useSession } from "next-auth/react";
import { useState } from "react";

const OnBoard = () => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [createOrg] = useCreateOrgMutation();
  const [addUserToOrg] = useAddUserToOrgMutation();
  const [addContactsToOrg] = useAddContactsToOrgMutation();
  const generateTestData = async () => {
    const newOrg = await createOrg({
      variables: {
        name: `${session?.user?.name}'s Org`,
        metadata: org.metadata,
      },
    });
    const orgID = newOrg.data?.insert_orgs_one?.id;
    await addUserToOrg({
      variables: {
        orgID,
        userID: session?.user?.id,
      },
    });
    await addContactsToOrg({
      variables: {
        contacts: users.map((u) => {
          return {
            org_id: orgID,
            name: u.name,
            metadata: {
              ...u,
            },
          };
        }),
      },
    });
    location.reload();
  };
  return (
    <Box>
      <Center h="100vh" flexDir={"column"}>
        <Box mb={8}>Development Preview</Box>
        <Button onClick={() => generateTestData()} disabled={loading}>
          {loading ? "Generating..." : `Generate Test Data`}
        </Button>
      </Center>
    </Box>
  );
};

export default OnBoard;
