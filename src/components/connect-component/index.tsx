import { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import * as Linking from "expo-linking";
import { User } from "@supabase/supabase-js";

import { supabase } from "@/supabase";
import { createSessionFromUrl } from "@/supabase/auth/sign-in";
import UserButtons from "./user-buttons";
import ConnectButtons from "./connect-buttons";

export default function ConnectComponent() {
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);

  const [user, setUser] = useState<User | null>();

  useLayoutEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <View className="w-[90%] items-center justify-center gap-y-2">
      {user ? (
        <UserButtons
          afterSignOut={() => setUser(null)}
          name={user.user_metadata["name"]}
          image={user.user_metadata["avatar_url"]}
        />
      ) : (
        <ConnectButtons />
      )}
    </View>
  );
}
