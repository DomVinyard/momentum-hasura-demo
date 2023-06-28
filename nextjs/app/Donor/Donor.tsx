import {
  Avatar,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  useGetDonorQuery,
  useIncrementTouchMutation,
  useSimulateSendEmailMutation,
} from "../../generated/graphql";

const Donor = () => {
  const router = useRouter();
  const { donorID } = router.query;
  const [simulateSendEmail] = useSimulateSendEmailMutation();
  const [incrementTouch] = useIncrementTouchMutation({
    refetchQueries: ["GetDonor"],
  });
  const { data } = useGetDonorQuery({
    variables: {
      infoID: donorID,
    },
  });
  const donor = data?.donor_info_by_pk;
  return (
    <Stack>
      <Center>
        <Avatar
          mt={8}
          size="2xl"
          name={donor?.donor?.name}
          src={donor?.donor?.avatar}
        />
      </Center>
      <Center>
        <Heading mt={2}>{donor?.donor?.name}</Heading>
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
    </Stack>
  );
};

export default Donor;
