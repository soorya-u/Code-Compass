import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

import { signInWithOAuth } from "@/supabase/auth/sign-in";

import { IProviders } from "@/types/auth";
import { useTheme } from "@/hooks/use-theme";

const providers = ["Google", "Github"];

export default function AuthProviders() {
  const router = useRouter();

  const { theme } = useTheme();

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
          className="w-full flex-row items-center justify-center gap-3 rounded-xl bg-secondary py-4"
        >
          <FontAwesome
            name={elem.toLowerCase() as IProviders}
            color={theme.primary}
            size={25}
          />
          <Text className="text-center font-poppins text-xl text-primary">
            Continue with {elem}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
