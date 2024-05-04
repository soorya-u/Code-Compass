import { supabase } from "..";

export const SignOut = async () => {
  await supabase.auth.signOut();
};
