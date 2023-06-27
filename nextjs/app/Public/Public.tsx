import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../_Global/_Layout";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { IoCreate } from "react-icons/io5";
import { BsCircleFill, BsPlusCircleFill } from "react-icons/bs";

export default function Public() {
  return (
    <Stack alignItems={"center"}>
      <Box w={{ md: 900 }} px={8} mt={2}>
        <Flex justify={"space-between"}>
          <Image src="/logo.png" alt="Logo" width="180px" height="50px" />
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
      <Box w="100%" pb={40} px={8} background={"url(/robot.png)"}>
        <Center>
          <Box w={{ md: 900 }} pb={20} px={8}>
            <Text
              mt={48}
              fontWeight={"bold"}
              fontSize={"80px"}
              lineHeight={1}
              maxW={"500px"}
            >
              Automatic Documents
            </Text>
            <Link
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <Button
                colorScheme="blue"
                mt={6}
                background="#0378F0"
                size={"lg"}
              >
                <Flex align="center">
                  <BsPlusCircleFill />
                  <Text ml={2}>Create Document</Text>
                </Flex>
              </Button>
            </Link>
          </Box>
        </Center>
      </Box>
      <Box w={{ md: 900 }} px={8}>
        <Box bg="#eee" p={16} mt={8}>
          <Heading size={"md"}>⚠️ Development Preview</Heading>
          <Text mt={2} fontSize={"lg"}>
            Are you an educator, researcher, technical writer, analyst or
            anybody who writes professional documents? Do you have a few minutes
            to{" "}
            <Link
              style={{ textDecoration: "underline" }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfC8dnkPcgpiVRbOz5nsUaUQZYj1sL6hiT0-g9koY2pRU6PQA/viewform"
            >
              help us with user testing?
            </Link>
          </Text>
        </Box>
      </Box>
    </Stack>
  );
}
