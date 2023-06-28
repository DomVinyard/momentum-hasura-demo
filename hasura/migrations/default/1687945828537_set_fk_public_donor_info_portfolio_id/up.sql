alter table "public"."donor_info" drop constraint "donors_portfolio_id_fkey",
  add constraint "donor_info_portfolio_id_fkey"
  foreign key ("portfolio_id")
  references "public"."portfolios"
  ("id") on update cascade on delete cascade;
