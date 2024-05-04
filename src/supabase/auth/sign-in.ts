import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as WebBrowser from "expo-web-browser";

import { supabase } from "..";
import { IProviders } from "@/types/auth";

const redirectTo = makeRedirectUri();

export const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  return data.session;
};

export const signIn = async (provider: IProviders) => {

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
      skipBrowserRedirect: true,
    },
  });

  if (error) throw error;

  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? "",
    redirectTo,
  );

  if (res.type === "success") await createSessionFromUrl(res.url);
};
