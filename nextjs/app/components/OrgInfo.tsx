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
import org from "../../mock_data/org";

export default function OrgInfo() {
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
          <Heading size={"md"}>{org.name}</Heading>
        </Center>
        <Box textAlign={"center"} mt={2} fontSize={"xs"}>
          {org.overview}
        </Box>
      </Box>
      <Box p={8}>
        <Flex justifyContent={"space-between"} alignItems={"center"} mt={4}>
          <Heading size={"sm"}>Recent Updates</Heading>
          <Button size="xs">Edit</Button>
        </Flex>
        <Text fontSize="2xs" color="#4880C8">
          Include anything you may want to share with donors
        </Text>
        {org.recent_updates.map((update) => (
          <Box key={update} py={2} borderBottom={"1px solid #ccc"}>
            <Box fontSize={"xs"}>{update}</Box>
          </Box>
        ))}
        <Flex justifyContent={"space-between"} alignItems={"center"} mt={12}>
          <Heading size={"sm"}>About You</Heading>
          <Button size="xs">Edit</Button>
        </Flex>
        <Text fontSize="2xs" color="#4880C8">
          We use this to give emails the correct voice
        </Text>
        {org.employee.about.map((update) => (
          <Box key={update} py={2} borderBottom={"1px solid #ccc"}>
            <Box fontSize={"xs"}>{update}</Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
