import fetch from "node-fetch";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

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

const typeDefs = gql`
  type Donor {
    id: String!
    name: String!
    avatar: String!
    uuid: ID!
  }
  type Query {
    donor(id: String): Donor
    donors: [Donor]
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  csrfPrevention: true,
  cache: "bounded",
  introspection: true,
});
export default startServerAndCreateNextHandler(server);
