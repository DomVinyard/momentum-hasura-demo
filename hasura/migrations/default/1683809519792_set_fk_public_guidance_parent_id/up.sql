alter table "public"."guidance"
  add constraint "guidance_parent_id_fkey"
  foreign key ("parent_id")
  references "public"."documents"
  ("id") on update restrict on delete restrict;
