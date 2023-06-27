import fetch from "node-fetch";
import { ApolloServer } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "node:path";

const resolvers = {
  Query: {
    donors: async () => {
      const response = await fetch(
        "https://649b246dbf7c145d023a0f46.mockapi.io/users"
      );
      const users = await response.json();
      return users;
    },
    donor: async (parent: any, args: any) => {
      const { id } = args;
      const response = await fetch(
        `https://649b246dbf7c145d023a0f46.mockapi.io/users/${id}`
      );
      const user = await response.json();

      if (user) {
        return user;
      } else {
        throw new Error("User not found");
      }
    },
  },
};

const loaders = [new GraphQLFileLoader()];
const typeDefs = loadSchemaSync(join(__dirname, "typeDefs.gql"), { loaders });
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const cors = { origin: "*", credentials: true };
exports.graphqlHandler = server.createHandler({ cors } as any);
