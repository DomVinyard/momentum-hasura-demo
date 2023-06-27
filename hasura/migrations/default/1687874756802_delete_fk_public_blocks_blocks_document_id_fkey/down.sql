alter table "public"."blocks"
  add constraint "blocks_document_id_fkey"
  foreign key ("document_id")
  references "public"."documents"
  ("id") on update restrict on delete cascade;
