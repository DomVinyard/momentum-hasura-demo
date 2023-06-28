import fetch from "node-fetch";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

const resolvers = {
  Query: {
    CRMDonors: async () => {
      const response = await fetch(
        "https://649b246dbf7c145d023a0f46.mockapi.io/users"
      );
      const users = await response.json();
      return users;
    },
    CRMDonor: async (parent: any, args: any) => {
      const { id } = args;
      const response = await fetch(
        `https://649b246dbf7c145d023a0f46.mockapi.io/users/${id}`
      );
      const user = await response.json();

      if (user) {
        return user;
      } else {
        throw new Error("Donor not found");
      }
    },
  },
};

const typeDefs = gql`
  type CRMDonor {
    id: String!
    name: String!
    avatar: String!
    uuid: ID!
  }
  type Query {
    CRMDonor(id: String): CRMDonor
    CRMDonors: [CRMDonor]
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
