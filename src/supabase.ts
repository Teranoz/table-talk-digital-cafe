import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mpopoqnxydaigaxecuzf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wb3BvcW54eWRhaWdheGVjdXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5OTkwMjcsImV4cCI6MjA2MDU3NTAyN30.7HnfN5uMU7TKC9uqvrWMoJnlBkvUoYxG-z6pNyGzV_U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
