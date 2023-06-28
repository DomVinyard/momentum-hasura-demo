import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Public() {
  return (
    <Stack alignItems={"center"}>
      <Box w={{ md: 900 }} px={8} mt={2}>
        <Flex justify={"space-between"} align={"center"}>
          <Text fontWeight={"bold"}>Momentum Hasura Demo</Text>
          <Link
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            <Button colorScheme="blue" mt={1} background="black">
              Sign in
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box w={{ md: 900 }} px={8}>
        <Box bg="#eee" p={8} mt={8}>
          <Heading size={"md"}>Demo</Heading>
          <Text mt={2} fontSize={"lg"}>
            Hasura + Chakra UI + Next.js
          </Text>
        </Box>
      </Box>
    </Stack>
  );
}
