alter table "public"."guidance"
  add constraint "guidance_parent_id_fkey2"
  foreign key ("parent_id")
  references "public"."blocks"
  ("id") on update restrict on delete restrict;
