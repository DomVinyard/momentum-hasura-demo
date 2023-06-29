import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  useAddNoteMutation,
  useGetDonorQuery,
  useIncrementTouchMutation,
  useSimulateSendEmailMutation,
} from "../../generated/graphql";

const Donor = () => {
  const router = useRouter();
  const { donorID } = router.query;
  const [simulateSendEmail] = useSimulateSendEmailMutation();
  const [incrementTouch] = useIncrementTouchMutation({
    refetchQueries: ["GetPortfolio", "GetDonor"],
  });
  const { data, loading, error } = useGetDonorQuery({
    variables: { donorID: donorID },
  });
  const [addNote] = useAddNoteMutation({
    refetchQueries: ["GetDonor"],
  });
  const donor = data?.donors_by_pk;
  if (loading) return "Loading...";
  return (
    <Stack>
      <Center>
        <Avatar
          mt={8}
          size="2xl"
          name={donor?.crm?.name}
          src={donor?.crm?.avatar}
        />
      </Center>
      <Center>
        <Heading mt={2}>{donor?.crm?.name}</Heading>
      </Center>
      <Center>
        <Heading pt={4} size="md">
          Touches: {donor?.touches}
        </Heading>
      </Center>
      <Flex pt={16} width={"100%"}>
        <Button
          mr={1}
          flex={1}
          colorScheme="blue"
          onClick={async () => {
            const response = await simulateSendEmail();
            alert(`response from server: ${response.data?.simulateSendEmail}`);
          }}
        >
          Simulate Send Email
        </Button>
        <Button
          onClick={() => {
            incrementTouch({ variables: { infoID: donorID } });
          }}
          flex={1}
        >
          Touch
        </Button>
      </Flex>
      <Button
        onClick={() => {
          // run mutation
          const content = window.prompt("Enter note content");
          if (!content) return;
          addNote({
            variables: {
              donor_id: donorID,
              content,
            },
          });
        }}
      >
        Add Note
      </Button>
      <Box>{JSON.stringify(donor?.notes)}</Box>
    </Stack>
  );
};

export default Donor;
