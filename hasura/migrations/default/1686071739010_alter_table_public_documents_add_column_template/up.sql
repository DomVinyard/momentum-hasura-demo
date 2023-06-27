alter table "public"."documents" add column "template" jsonb
 not null default jsonb_build_object();
