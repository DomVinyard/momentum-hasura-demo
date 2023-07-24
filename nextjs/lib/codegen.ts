/* eslint-disable import/no-extraneous-dependencies */
import { CodegenConfig } from "@graphql-codegen/cli";

// import dotenv

import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

const hasuraEndpoint = process.env.HASURA_PROJECT_ENDPOINT?.replace(
  "/v1/graphql",
  ""
);

const codegenURI = `${hasuraEndpoint}/v1/graphql`;
const config: CodegenConfig = {
  schema: [
    {
      [codegenURI]: {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET || "secret",
        },
      },
    },
  ],
  documents: ["**/*.gql", "**/*.graphql"],
  watch: true,
  overwrite: true,
  config: {
    scalars: {
      DateTime: "Date",
      JSON: "{ [key: string]: any }",
      timestamptz: "string",
      numeric: "number",
    },
  },
  generates: {
    "./generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-resolvers",
      ],
      config: {
        maybeValue: "T | undefined",
        withHooks: true,
        withComponent: true,
        withHOC: false,
      },
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
