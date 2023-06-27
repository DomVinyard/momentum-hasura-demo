alter table "public"."documents" add column "metadata" jsonb
 null default jsonb_build_object();
