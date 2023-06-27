CREATE TABLE "public"."guidance" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "is_enabled" boolean NOT NULL DEFAULT true, "prompt" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
