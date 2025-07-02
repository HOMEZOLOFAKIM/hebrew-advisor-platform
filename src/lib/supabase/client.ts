
import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/integrations/supabase/types'

// Client-side Supabase client for browser components
// Uses environment variables for configuration
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
