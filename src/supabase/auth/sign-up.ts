import { router } from "expo-router";
import { makeRedirectUri } from "expo-auth-session";

import { supabase } from "..";
import { type SignUpType, signUpSchema } from "@/schema/auth";

const redirectTo = makeRedirectUri();

export const signUpWithCredentials = async (payload: SignUpType) => {
  const parsedPayload = await signUpSchema.safeParseAsync(payload);
  if (parsedPayload.error) throw new Error(parsedPayload.error.message);

  const { data, error } = await supabase.auth.signUp({
    email: parsedPayload.data.email,
    password: parsedPayload.data.password,
    options: {
      emailRedirectTo: redirectTo,
    },
  });

  if (error) throw new Error(error.message);
};
