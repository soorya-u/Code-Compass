import { supabase } from "@/supabase";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setUser(user);
    })();
  });

  if (!user) return;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="mt-8 flex-row items-center justify-start gap-4 pl-7">
        <Image
          className="size-[60] rounded-full border border-black dark:border-white"
          src={user.user_metadata["avatar_url"]}
        />
        <View>
          <Text className="font-poppins text-xl text-black dark:text-white">
            {user.user_metadata["name"]}
          </Text>
          <Text className="font-poppins text-base text-black/50 dark:text-white/50">
            {user.user_metadata["email"]}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
