import { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { User } from "@supabase/supabase-js";

import { supabase } from "@/supabase";
import UserButtons from "./user-buttons";
import ConnectButtons from "./connect-buttons";

export default function ConnectComponent() {
  const [user, setUser] = useState<User | null>();

  useLayoutEffect(() => {
    // fetch from db
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
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
