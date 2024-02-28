import { createClient } from "@supabase/supabase-js";

const Supabase = createClient("https://parkfeydnmrwjgzhvddq.supabase.co", import.meta.env.VITE_SUPABASE_KEY);


export default Supabase  ;
