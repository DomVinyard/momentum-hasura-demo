SET check_function_bodies = false;
CREATE TABLE public.contacts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    crm_id text NOT NULL,
    name text,
    org_id uuid NOT NULL,
    metadata jsonb
);
CREATE TABLE public.org_users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    org_id uuid NOT NULL
);
CREATE TABLE public.orgs (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL
);
CREATE TABLE public.accounts (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at bigint,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    oauth_token_secret text,
    oauth_token text,
    "userId" uuid NOT NULL,
    refresh_token_expires_in integer
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text,
    email text,
    "emailVerified" timestamp with time zone,
    image text,
    is_admin boolean DEFAULT false NOT NULL,
    metadata jsonb
);
ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT donors_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.org_users
    ADD CONSTRAINT org_memberships_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.orgs
    ADD CONSTRAINT orgs_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_org_id_fkey FOREIGN KEY (org_id) REFERENCES public.orgs(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.org_users
    ADD CONSTRAINT org_memberships_org_fkey FOREIGN KEY (org_id) REFERENCES public.orgs(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.org_users
    ADD CONSTRAINT org_memberships_user_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;