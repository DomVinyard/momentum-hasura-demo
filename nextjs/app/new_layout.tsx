"use client";
import { Box } from "@chakra-ui/react";
import DonorTable from "./components/DonorTable";
import { SessionProvider, useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { ApolloProvider } from "@apollo/client/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import { useApollo } from "./apollo";

function Providers({ children }: { children: React.ReactNode }) {
  const apolloClient = useApollo({}, token);
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerSize = 16;
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header size={headerSize} />
          <Box
            position="fixed"
            left={0}
            top={headerSize}
            bottom={0}
            right={400}
            bg="#fafafa"
            overflowY={"scroll"}
          >
            <DonorTable />
          </Box>
          <Box
            position={"fixed"}
            right={0}
            top={headerSize}
            bottom={0}
            overflowY={"scroll"}
            borderLeft={"1px solid #ccc"}
            w={"400px"}
            bg="white"
          >
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
