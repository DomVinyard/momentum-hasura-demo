import { Center } from "@chakra-ui/react";
import Layout from "../app/_Global/_Layout";

export default function Index({ initialApolloState }: any) {
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
