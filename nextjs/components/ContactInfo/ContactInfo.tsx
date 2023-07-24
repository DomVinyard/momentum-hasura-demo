"use client";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import TimeAgo from "react-timeago";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContactInfoQuery } from "../../generated/graphql";

export default function DonorPanel({
  openDraftModal,
  setOptions,
  setGeneratingOptions,
}: any) {
  const pathname = usePathname();
  const selectedDonor = pathname.split("/").slice(-1)[0];
  const router = useRouter();
  const getDraftOptions = async () => {
    if (!donor) return;
    setGeneratingOptions(true);
    const res = await fetch(`/api/generate-draft-options?userID=${donor?.id}`);
    const data = await res.json();
    setOptions(data.response);
    setGeneratingOptions(false);
  };
  const { data, loading, error } = useContactInfoQuery({
    variables: { contactID: selectedDonor },
  });
  const donor = data?.contacts_by_pk;
  return (
    <>
      <Stack>
        <Flex justifyContent="flex-end">
          <Button variant="ghost" size="lg" onClick={() => router.push("/")}>
            <AiFillCloseCircle size="33px" />
          </Button>
        </Flex>
        <Center>
          <Avatar
            mt={-8}
            size="xl"
            name={donor?.name}
            src={donor?.metadata?.avatar}
          />
        </Center>
        <Center>
          <Heading size="md" mt={2}>
            {donor?.name}
          </Heading>
        </Center>
        <Tabs isFitted defaultIndex={0} mt={4}>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Chat</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box px={4}>
                <Flex
                  pt={8}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  pb={2}
                >
                  <Heading size="sm">Personal Info</Heading>
                  <Button size="xs" colorScheme="blue">
                    Add
                  </Button>
                </Flex>
                {donor?.metadata?.information?.map((info: any) => (
                  <Flex
                    bg={"#f5f5f5"}
                    mb={1}
                    p={2}
                    key={info.information}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text fontSize={"sm"}>{info.information}</Text>
                    <Text fontSize="xs" opacity="0.6">
                      <TimeAgo date={(info as any).date} />
                    </Text>
                  </Flex>
                ))}
              </Box>
              <Box px={4}>
                <Heading pt={12} pb={2} size="sm">
                  Gift History
                </Heading>
                {donor?.metadata?.gifts?.map((info: any) => (
                  <Flex
                    bg={"#f5f5f5"}
                    mb={1}
                    p={1}
                    key={info.amount}
                    justifyContent={"space-between"}
                  >
                    <Text>${info.amount}</Text>
                    <Text fontSize="sm" opacity="0.6">
                      <TimeAgo date={info.date} />
                    </Text>
                  </Flex>
                ))}
              </Box>
              <Box px={4}>
                <Heading pt={12} pb={2} size="sm">
                  Donor Search
                </Heading>
                <Image mb={2} src={"/mock-graph.png"} />
              </Box>
            </TabPanel>
            <TabPanel>
              {donor?.metadata?.correspondance.map((message: any) => (
                <Box
                  bg={message.direction === "inbound" ? "#E2E1E5" : "#306EF4"}
                  color={message.direction === "inbound" ? "#222" : "#fff"}
                  mr={message.direction === "inbound" ? 16 : 0}
                  ml={message.direction === "inbound" ? 0 : 16}
                  mb={2}
                  p={3}
                  borderRadius={8}
                >
                  {message.content}
                </Box>
              ))}

              <Center mt={8}>
                <Button
                  onClick={() => {
                    getDraftOptions();
                    openDraftModal();
                  }}
                >
                  New Email
                </Button>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
}
