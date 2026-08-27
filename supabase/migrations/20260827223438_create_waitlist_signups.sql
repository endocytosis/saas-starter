/*
# Early access waitlist

## What this migration does
Creates the storage behind the "Request early access" form on the marketing home page.
Visitors submit an email address (and optionally what they want to use the product for).
Each submission is stored as one row. The home page also shows how many people have
joined so far, which is served by a small counting function rather than by exposing the
list of email addresses.

## 1. New Tables
- `waitlist_signups`
  - `id` (uuid, primary key) - internal identifier for the signup
  - `email` (text, unique, not null) - the visitor's email address, lower-cased
  - `use_case` (text, nullable) - optional free-text note about what they need
  - `referrer` (text, nullable) - which page/section the signup came from
  - `created_at` (timestamptz, default now()) - when the signup happened

## 2. Modified Tables
None.

## 3. Security
1. Row Level Security is enabled on `waitlist_signups`.
2. A single INSERT policy lets anonymous and signed-in visitors add themselves to the list.
3. There is deliberately NO select, update or delete policy. Nobody using the public
   application key can read, change or remove signups, so the collected email addresses
   cannot be harvested from the browser.
4. Public visitors still need a signup total for the home page. `public.waitlist_count()`
   is a SECURITY DEFINER function that returns only the number of rows (never their
   contents) and is the only readable surface over this table.
5. `email` is validated in the database with a format check and a length limit so junk
   values cannot be stored even if the form is bypassed.

## 4. Important notes
1. The unique index on `email` means submitting the same address twice is rejected by the
   database. The application treats that specific rejection as "you are already on the
   list" rather than as an error.
2. `waitlist_count()` pins its `search_path`, so it cannot be tricked into reading a
   different table.
*/

CREATE TABLE IF NOT EXISTS waitlist_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  use_case text,
  referrer text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT waitlist_signups_email_format CHECK (email ~* '^[^@\s]+@[^@\s.]+\.[^@\s]+$'),
  CONSTRAINT waitlist_signups_email_length CHECK (char_length(email) <= 255),
  CONSTRAINT waitlist_signups_use_case_length CHECK (use_case IS NULL OR char_length(use_case) <= 500),
  CONSTRAINT waitlist_signups_referrer_length CHECK (referrer IS NULL OR char_length(referrer) <= 100)
);

CREATE UNIQUE INDEX IF NOT EXISTS waitlist_signups_email_key
  ON waitlist_signups (lower(email));

CREATE INDEX IF NOT EXISTS waitlist_signups_created_at_idx
  ON waitlist_signups (created_at DESC);

ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anyone_can_join_waitlist" ON waitlist_signups;
CREATE POLICY "anyone_can_join_waitlist"
  ON waitlist_signups FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.waitlist_count()
RETURNS bigint
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT count(*) FROM public.waitlist_signups;
$$;

REVOKE ALL ON FUNCTION public.waitlist_count() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.waitlist_count() TO anon, authenticated;
