CREATE TABLE "public"."documents" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "prompt" text NOT NULL, "owner_id" uuid NOT NULL, "is_public" boolean NOT NULL DEFAULT false, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
