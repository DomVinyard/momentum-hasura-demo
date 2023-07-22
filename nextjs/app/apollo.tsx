import { ApolloClient, HttpLink, split, from } from "@apollo/client";
import { InMemoryCache, NormalizedCacheObject } from "@apollo/client/cache";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import fetch from "isomorphic-unfetch";
import ws from "isomorphic-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { RetryLink } from "@apollo/client/link/retry";
import { Session } from "next-auth";

const createHttpLink = (token: string) => {
  const getHttpUri = () => {
    if (process.env.NODE_ENV === "production") {
      return process.env.NEXT_PUBLIC_API_URL;
    }
    return process.browser
      ? process.env.NEXT_PUBLIC_API_URL
      : process.env.NEXT_PUBLIC_SSR_API_URL;
  };

  const httpOptions = {
    uri: getHttpUri(),
    credentials: "include",
    headers: !token
      ? { "x-hasura-role": "public" }
      : {
          Authorization: `Bearer ${token}`,
        },
    fetch,
  };
  const httpLink = new HttpLink(httpOptions as any);
  const retryLink = new RetryLink({
    delay: {
      initial: 300,
      max: Infinity,
      jitter: true,
    },
    attempts: {
      max: 5,
      retryIf: (error) => !!error,
    },
  });
  const additiveLink = from([retryLink, httpLink]);

  return additiveLink;
};

const createWSLink = (token: string) =>
  new WebSocketLink(
    new SubscriptionClient(
      process.env.NEXT_PUBLIC_WS_URL as string,
      {
        lazy: true,
        reconnect: true,
        connectionParams: async () => ({
          headers: { Authorization: `Bearer ${token}` },
        }),
      },
      ws
    )
  );
let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = (token: string) => {
  const ssrMode = typeof window === "undefined";
  const link = !ssrMode
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        createWSLink(token),
        createHttpLink(token)
      )
    : createHttpLink(token);
  return new ApolloClient({ ssrMode, link, cache: new InMemoryCache() });
};

export const initializeApollo = (initialState: unknown, token: string) => {
  const apolloClientTemp = apolloClient ?? createApolloClient(token);
  if (initialState) {
    const existingCache = apolloClientTemp.extract();
    apolloClientTemp.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === "undefined") return apolloClientTemp;
  if (!apolloClient) apolloClient = apolloClientTemp;
  return apolloClientTemp;
};

export function useApollo(initialState: any, token: string) {
  const store = initializeApollo(initialState, token);
  return store;
}

export const adminClient = new ApolloClient({
  uri: `${process.env.HASURA_PROJECT_ENDPOINT}`,
  cache: new InMemoryCache(),
  headers: {
    "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
  } as any,
});

export const client = (token: string) =>
  new ApolloClient({
    uri: `${process.env.HASURA_PROJECT_ENDPOINT}`,
    cache: new InMemoryCache(),
    headers: {
      "X-Hasura-Role": "user",
      Authorization: `Bearer ${token}`,
    } as any,
  });

export const connectToDB = async (session: Session) => {
  return await client(`${session?.user?.token}`);
};
