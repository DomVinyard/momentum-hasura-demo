CREATE TABLE "public"."portfolios" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "org" uuid NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
