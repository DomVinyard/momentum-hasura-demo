CREATE TABLE "public"."notes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "donor_id" uuid NOT NULL, "content" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("donor_id") REFERENCES "public"."donors"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
