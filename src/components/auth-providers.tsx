import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

import { signInWithOAuth } from "@/supabase/auth/sign-in";

import { theme } from "@/constants/theme";

import { IProviders } from "@/types/auth";

const providers = ["Google", "Github"];

export default function AuthProviders() {
  const router = useRouter();

  return (
    <View className="w-[90%] items-center justify-center gap-y-2">
      {providers.map((elem, idx) => (
        <TouchableOpacity
          onPress={async () =>
            await signInWithOAuth(elem.toLowerCase() as IProviders).then(() =>
              router.replace("/browse"),
            )
          }
          key={idx}
          className="bg-secondary w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
        >
          <FontAwesome
            name={elem.toLowerCase() as IProviders}
            color={theme.primary}
            size={25}
          />
          <Text className="text-primary text-center font-poppins text-xl">
            Continue with {elem}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
