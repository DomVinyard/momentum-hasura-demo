import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useSession } from "next-auth/react";

export const Inner = ({ children, padding }: any) => {
  return (
    <Box paddingX={padding ? 4 : 0} margin={"0 auto"}>
      {children}
    </Box>
  );
};

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  return (
    <Inner>
      <Flex maxW={"100vw"} w={"100vw"}>
        {session?.user && <Box>logged in</Box>}
        <Flex flex={1} justifyContent={"space-around"}>
          <Box w={{ md: 900 }} pb={40} px={8} ml={session?.user ? 280 : 0}>
            {children}
          </Box>
        </Flex>
      </Flex>
    </Inner>
  );
}