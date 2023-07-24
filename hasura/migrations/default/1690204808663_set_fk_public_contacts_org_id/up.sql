alter table "public"."contacts" drop constraint "contacts_org_id_fkey",
  add constraint "contacts_org_id_fkey"
  foreign key ("org_id")
  references "public"."orgs"
  ("id") on update restrict on delete cascade;
