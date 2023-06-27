import { Flex, Skeleton } from "@chakra-ui/react";

export default function LoadingSkeleton() {
  return (
    <Flex mt={2}>
      <Skeleton mr={2} w={120} h={3} />
      <Skeleton mr={2} w={65} h={3} />
      <Skeleton mr={2} w={150} h={3} />
    </Flex>
  );
}
