alter table "public"."portfolios"
  add constraint "portfolios_org_id_fkey"
  foreign key ("org_id")
  references "public"."orgs"
  ("id") on update restrict on delete restrict;
