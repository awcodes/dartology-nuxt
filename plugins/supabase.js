import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.supabaseUrl, process.env.supabaseAnonKey);

export default (_, inject) => {
  inject("supabase", supabase);
};
