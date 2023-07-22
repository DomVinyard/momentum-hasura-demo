"use client";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { useApollo } from "../lib/apollo";
import { ApolloProvider } from "@apollo/client/react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Public from "./components/Public";

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: "#fbf7f6",
        },
      }),
    },
  },
});

const WithApollo = ({ children, token, status }: any) => {
  const apolloClient = useApollo(undefined, token);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

const WithSession = ({ children }: any) => {
  const { data: session, status } = useSession();
  const token = session?.user?.token;
  const router = useRouter();
  if (!token) return <Public />;
  return (
    <Box>
      <Box display={{ base: "none", md: "block" }}>
        <WithApollo token={token} status={status}>
          {children}
        </WithApollo>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        This demo is not available on mobile devices. Please use a desktop
        browser.
      </Box>
    </Box>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={undefined}>
        <WithSession>{children}</WithSession>
      </SessionProvider>
    </ChakraProvider>
  );
}
