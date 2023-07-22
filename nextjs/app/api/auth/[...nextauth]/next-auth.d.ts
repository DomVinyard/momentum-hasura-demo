import "next-auth/jwt";
import type { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    token: string;
    user?: DefaultUser & {
      id: string;
      token: any;
    };
  }
}

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin";
  }
}
