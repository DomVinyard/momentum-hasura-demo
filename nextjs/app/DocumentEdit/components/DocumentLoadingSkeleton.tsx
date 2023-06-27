import { Box, Skeleton } from "@chakra-ui/react";
import Layout from "../../_Global/_Layout";
import { useRouter } from "next/router";

const DocumentLoadingSkeleton = ({ CloseButton }: any) => {
  const router = useRouter();
  const isNewDoc = router.query.state === "newdoc";
  const Wrapper = isNewDoc ? Layout : Box;
  return (
    <Wrapper>
      <Box mt={4}>{CloseButton ? <CloseButton /> : <Box h={8}></Box>}</Box>
      <Box px={50}>
        <Skeleton mt={16} height="20px" width="200px" />
        <Skeleton mt={12} height="40px" width="550px" startColor="#777" />
        <Skeleton mt={20} height="20px" width="300px" />
        <Box bg="#fff" p={4} mt={4}>
          <Skeleton mt={2} height="40px" width="200px" />
          <Skeleton mt={4} height="20px" width="500px" />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default DocumentLoadingSkeleton;
