CREATE TABLE "public"."donors" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "portfolio_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("portfolio_id") REFERENCES "public"."portfolios"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
