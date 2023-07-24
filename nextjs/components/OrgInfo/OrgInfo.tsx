"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useOrgInfoQuery } from "../../generated/graphql";
import { useSession } from "next-auth/react";

export default function OrgInfo() {
  const { data: session } = useSession();
  const { data, loading, error } = useOrgInfoQuery({
    variables: {
      userID: session?.user?.id,
    },
  });
  const org = data?.users_by_pk?.orgs[0]?.org;
  if (loading) return <Box>Loading...</Box>;
  return (
    <>
      <Box
        bgImage="url(/mock-org.jpg)"
        w={"100%"}
        h={32}
        bgSize={"cover"}
        bgPos={"top"}
        pb={8}
      />
      <Box p={10} pt={8} borderBottom={"1px solid #aaa"}>
        <Center>
          <Heading size={"md"}>{org?.name}</Heading>
        </Center>
        <Box textAlign={"center"} mt={2} fontSize={"xs"}>
          {org?.metadata.overview}
        </Box>
        <Center mt={4}>
          <Button size="xs">Edit</Button>
        </Center>
      </Box>
      <Box p={8}>
        <Flex justifyContent={"space-between"} alignItems={"center"} mt={4}>
          <Heading size={"sm"}>Info & Updates</Heading>
          <Button size="xs">Add</Button>
        </Flex>
        <Text fontSize="2xs" color="#4880C8">
          Include anything you may want to share with your contacts
        </Text>
        {org?.metadata.recent_updates.map((update: any) => (
          <Box key={update} py={2} borderBottom={"1px solid #ccc"}>
            <Box fontSize={"xs"}>{update}</Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
