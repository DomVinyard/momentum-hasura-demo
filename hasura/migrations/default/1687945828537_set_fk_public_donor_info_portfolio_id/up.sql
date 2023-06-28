alter table "public"."donors" drop constraint "donors_portfolio_id_fkey",
  add constraint "donors_portfolio_id_fkey"
  foreign key ("portfolio_id")
  references "public"."portfolios"
  ("id") on update cascade on delete cascade;
