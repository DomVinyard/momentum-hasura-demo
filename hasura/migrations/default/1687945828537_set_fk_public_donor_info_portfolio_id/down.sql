alter table "public"."donor_info" drop constraint "donor_info_portfolio_id_fkey",
  add constraint "donors_portfolio_id_fkey"
  foreign key ("portfolio_id")
  references "public"."portfolios"
  ("id") on update restrict on delete restrict;
