import { Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../app/_Global/_Layout";

export default function Index({ initialApolloState }: any) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Center height="70vh" opacity={0.5} mt={{ base: 0, md: "110px" }}>
          No portfolio selected
        </Center>
      </Layout>
    </>
  );
}
