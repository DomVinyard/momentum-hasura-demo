alter table "public"."blocks" add column "is_locked" boolean
 not null default 'false';
