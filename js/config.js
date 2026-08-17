// =========================================================
// Supabase project configuration
// =========================================================
const SUPABASE_URL = 'https://vwvxfalgsebxpshooyxs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dnhmYWxnc2VieHBzaG9veXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyOTQ5MzcsImV4cCI6MjEwMTg3MDkzN30.vlX-pjS_MBi-bfLAy91gff99yzyNMjiJVaulqZjC0vY';

// Single shared Supabase client used across the site
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Owner's WhatsApp number for one-time bookings (E.164 format, no + or spaces)
// TODO: replace with the real business WhatsApp number
const OWNER_WHATSAPP_NUMBER = '919629885790';
