
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."guidance" add column "created_at" timestamptz
--  not null default now();

alter table "public"."guidance"
  add constraint "guidance_parent_id_fkey6"
  foreign key ("parent_id")
  references "public"."blocks"
  ("id") on update no action on delete cascade;

alter table "public"."guidance"
  add constraint "guidance_parent_id_fkey5"
  foreign key ("parent_id")
  references "public"."documents"
  ("id") on update no action on delete cascade;

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey6",
  add constraint "guidance_parent_id_fkey4"
  foreign key ("parent_id")
  references "public"."blocks"
  ("id") on update no action on delete restrict;

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey5",
  add constraint "guidance_parent_id_fkey3"
  foreign key ("parent_id")
  references "public"."blocks"
  ("id") on update no action on delete restrict;

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey4",
  add constraint "guidance_parent_id_fkey2"
  foreign key ("parent_id")
  references "public"."blocks"
  ("id") on update restrict on delete restrict;

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey3",
  add constraint "guidance_parent_id_fkey"
  foreign key ("parent_id")
  references "public"."documents"
  ("id") on update restrict on delete restrict;
