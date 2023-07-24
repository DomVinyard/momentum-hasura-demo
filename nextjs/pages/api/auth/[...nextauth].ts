import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { HasuraAdapter } from "next-auth-hasura-adapter";
import * as jsonwebtoken from "jsonwebtoken";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: HasuraAdapter({
    endpoint: process.env.HASURA_PROJECT_ENDPOINT!,
    adminSecret: process.env.HASURA_ADMIN_SECRET!,
  }),
  theme: {
    colorScheme: "auto",
  },
  // Use JWT strategy so we can forward them to Hasura
  session: { strategy: "jwt" },
  secret: process.env.HASURA_JWT_SECRET!,
  // Encode and decode your JWT with the HS256 algorithm
  jwt: {
    encode: ({ secret, token }) => {
      // console.log({ en: "code", secret, token });
      const encodedToken = jsonwebtoken.sign(token!, secret, {
        algorithm: "HS256",
      });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      // console.log({ de: "code", secret, token });
      const decodedToken = jsonwebtoken.verify(token!, secret, {
        algorithms: ["HS256"],
      });
      return decodedToken as JWT;
    },
  },
  callbacks: {
    // Add the required Hasura claims
    // https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt/#the-spec
    async jwt({ token }) {
      return {
        ...token,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user", "admin"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token.sub,
        },
      };
    },
    // Add user ID to the session
    session: async ({ session, token }) => {
      const secret = process.env.HASURA_JWT_SECRET as string;
      const encodedToken = jsonwebtoken.sign(token!, secret, {
        algorithm: "HS256",
      });
      if (session?.user) {
        session.user.id = token.sub!;
        session.user.token = encodedToken;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
