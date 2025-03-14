import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yradfwkuwmtpqxokwpoy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYWRmd2t1d210cHF4b2t3cG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NDcyODUsImV4cCI6MjA0NDEyMzI4NX0.fb7wKyKlhjr8ccdJLHXYICmo-49eolSiLjBB3Urzs-o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
