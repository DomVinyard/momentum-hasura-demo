alter table "public"."donor_info" alter column "name" drop not null;
alter table "public"."donor_info" add column "name" text;
