// =========================================================
// Supabase project configuration
const SUPABASE_URL = 'https://ueoujaagrxgzdqtjozja.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ND5jjuV8UCjJgBtZ9r1_Ew_FaEVNkKc';

// Single shared Supabase client used across the site
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Single shared Supabase client used across the site
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Owner's WhatsApp number for one-time bookings (E.164 format, no + or spaces)
// TODO: replace with the real business WhatsApp number
const OWNER_WHATSAPP_NUMBER = '919629885790';
