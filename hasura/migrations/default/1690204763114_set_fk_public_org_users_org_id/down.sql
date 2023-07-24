alter table "public"."org_users" drop constraint "org_users_org_id_fkey",
  add constraint "org_memberships_org_fkey"
  foreign key ("org_id")
  references "public"."orgs"
  ("id") on update restrict on delete restrict;
