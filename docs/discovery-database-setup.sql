-- Proposed setup only: apply in a reviewed migration, not automatically.
-- Keep private creator data separate; do not grant public access to internal creator tables.
begin;
create table public.avero_public_discovery_profiles (
  handle text primary key check (handle ~ '^[a-z0-9._]{1,30}$'),
  creator_account_id bigint references public.avero_creator_accounts(id) on delete set null,
  display_name text not null check (length(trim(display_name)) > 0),
  niche text not null,
  follower_count integer check (follower_count >= 0),
  city text,
  languages text[] not null default '{}',
  photo_url text,
  published boolean not null default false,
  consent_verified_at timestamptz,
  verified_at timestamptz,
  updated_at timestamptz not null default now(),
  check (not published or (consent_verified_at is not null and verified_at is not null))
);
alter table public.avero_public_discovery_profiles enable row level security;
revoke all on table public.avero_public_discovery_profiles from public, anon, authenticated;
grant select (handle, display_name, niche, follower_count, city, languages, photo_url)
  on public.avero_public_discovery_profiles to anon, authenticated;
grant select, insert, update, delete on public.avero_public_discovery_profiles to service_role;
create policy "Only approved public discovery profiles"
  on public.avero_public_discovery_profiles for select to anon, authenticated
  using (published and consent_verified_at is not null and verified_at is not null);
commit;

-- Before enabling the live website:
-- 1. Insert only individually verified and consented profiles; leave unpublished by default.
-- 2. Verify anon cannot read creator_account_id, approval dates, or unpublished rows,
--    and cannot insert, update, or delete records.
-- 3. Configure DISCOVERY_SUPABASE_URL and DISCOVERY_SUPABASE_ANON_KEY
--    (anon/publishable key only; never use a service-role key).
-- 4. Configure DISCOVERY_WHATSAPP_NUMBER with the verified business number
--    in international format without plus sign, to enable direct prefilled enquiries.
-- 5. Pulse publishing UI should use existing authenticated server-side admin authorization;
--    do not give ordinary authenticated roles access to publish records.
-- The unconfigured website uses only the previously public homepage roster.
