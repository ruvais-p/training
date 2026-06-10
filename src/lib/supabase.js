import { createClient } from "@supabase/supabase-js";

// Used by the API routes (server-side). Prefer the service-role key when
// available so reads/writes bypass Row Level Security; fall back to the
// public anon key (inserts only, subject to RLS policies).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase env vars missing: set NEXT_PUBLIC_SUPABASE_URL and a key"
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
