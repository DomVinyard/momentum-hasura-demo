import { SessionProvider, useSession } from "next-auth/react";
import "./styles.css";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { useApollo } from "../lib/apollo";
import { ApolloProvider } from "@apollo/client/react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Public from "../app/Public/Public";
import Hotjar from "@hotjar/browser";
import { useEffect } from "react";

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

const initHotjar = () => {
  const siteId = 3512142;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion, {
    debug: true,
  });
};

const identifyHotjar = (user: any) => {
  if (!user) return;
  const { email, name } = user;
  Hotjar.identify(email, {
    name,
  });
};

const WithApollo = ({ Component, pageProps, token, status }: any) => {
  const apolloClient = useApollo(pageProps.initialApolloState, token);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...{ ...pageProps, status }} />
    </ApolloProvider>
  );
};

const WithSession = ({ Component, pageProps }: any) => {
  const { data: session, status } = useSession();
  const token = session?.user?.token;
  const router = useRouter();
  const pathname = router.pathname;
  if (!token && !pathname.includes("/share")) return <Public />;
  identifyHotjar(session?.user);
  return (
    <Box>
      <Box display={{ base: "none", md: "block" }}>
        <WithApollo {...{ Component, pageProps, token, status }} />
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        This development preview is not available on mobile devices. Please use
        a desktop browser.
      </Box>
    </Box>
  );
};

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session; initialApolloState: any }>) {
  useEffect(() => {
    initHotjar();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <WithSession pageProps={pageProps} Component={Component} />
      </SessionProvider>
    </ChakraProvider>
  );
}
