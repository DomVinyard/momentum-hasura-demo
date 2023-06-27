alter table "public"."documents" drop constraint "documents_owner_id_fkey",
  add constraint "documents_owner_id_fkey"
  foreign key ("owner_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
