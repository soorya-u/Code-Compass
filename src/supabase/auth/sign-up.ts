import { makeRedirectUri } from "expo-auth-session";

import { supabase } from "..";
import { type SignUpType, signUpSchema } from "@/schema/auth";

const emailRedirectTo = makeRedirectUri();

export const signUpWithCredentials = async (payload: SignUpType) => {
  const parsedPayload = await signUpSchema.safeParseAsync(payload);
  if (parsedPayload.error) throw new Error(parsedPayload.error.message);

  const credentials = parsedPayload.data;

  const { error } = await supabase.auth.signUp({
    ...credentials,
    options: {
      emailRedirectTo,
      data: { name: credentials.fullName },
    },
  });

  if (error) throw new Error(error.message);
};
