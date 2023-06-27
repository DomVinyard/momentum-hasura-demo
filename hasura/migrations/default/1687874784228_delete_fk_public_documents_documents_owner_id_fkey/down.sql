alter table "public"."documents"
  add constraint "documents_owner_id_fkey"
  foreign key ("owner_id")
  references "public"."users"
  ("id") on update restrict on delete cascade;
