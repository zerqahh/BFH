import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://hunvqnqhkoajdylgpfkk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bnZxbnFoa29hamR5bGdwZmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzODc1NDEsImV4cCI6MjAwMDk2MzU0MX0.pyQ-VEUf11opspeujXdjnL_i5p6kVpYyn-rpLWjAggA"


);

export default supabase;