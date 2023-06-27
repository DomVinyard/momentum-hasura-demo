
alter table "public"."guidance" drop constraint "guidance_parent_id_fkey",
  add constraint "guidance_parent_id_fkey3"
  foreign key ("parent_id")
  references "public"."documents"
  ("id") on update no action on delete no action;

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey2",
  add constraint "guidance_parent_id_fkey4"
  foreign key ("parent_id")
  references "public"."blocks"
  ("id") on update no action on delete restrict;

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey3",
  add constraint "guidance_parent_id_fkey5"
  foreign key ("parent_id")
  references "public"."documents"
  ("id") on update no action on delete cascade;

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey4",
  add constraint "guidance_parent_id_fkey6"
  foreign key ("parent_id")
  references "public"."blocks"
  ("id") on update no action on delete cascade;

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey5";

alter table "public"."guidance" drop constraint "guidance_parent_id_fkey6";

alter table "public"."guidance" add column "created_at" timestamptz
 not null default now();
