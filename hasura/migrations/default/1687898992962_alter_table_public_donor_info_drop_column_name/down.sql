alter table "public"."donors" alter column "name" drop not null;
alter table "public"."donors" add column "name" text;
