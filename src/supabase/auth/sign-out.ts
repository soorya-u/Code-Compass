import { supabase } from "..";

export const signOut = async () => {
  await supabase.auth.signOut();
};
