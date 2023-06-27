CREATE TABLE "public"."blocks" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "type" text, "document_id" uuid NOT NULL, "index" integer, "prompt" text NOT NULL, "output" text NOT NULL, "is_visible" boolean NOT NULL DEFAULT true, "is_manual_overwrite" boolean NOT NULL DEFAULT false, "metadata" jsonb NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("document_id") REFERENCES "public"."documents"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
