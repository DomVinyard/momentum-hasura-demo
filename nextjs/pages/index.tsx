import { Box, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import DocumentLoadingSkeleton from "../app/DocumentEdit/components/DocumentLoadingSkeleton";
import Layout from "../app/_Global/_Layout";

export default function Index({ initialApolloState }: any) {
  const router = useRouter();
  return (
    <>
      {router.query.state === "newdoc" ? (
        <Box>
          <DocumentLoadingSkeleton />
        </Box>
      ) : (
        <Layout>
          <Center height="70vh" opacity={0.5} mt={{ base: 0, md: "110px" }}>
            No document selected
          </Center>
        </Layout>
      )}
    </>
  );
}
