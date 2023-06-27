CREATE TABLE "public"."org_memberships" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user" uuid NOT NULL, "org" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("org") REFERENCES "public"."orgs"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
