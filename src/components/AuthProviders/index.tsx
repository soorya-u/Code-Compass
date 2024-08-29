import { Text, TouchableOpacity, View } from "react-native";

import { signInWithOAuth } from "@/supabase/auth/sign-in";
import { useConstantTheme } from "@/hooks/use-theme";
import { IProviders } from "@/types/auth";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const providers = ["Google", "Github"];

export default function AuthProviders() {
  const { styles, backgroundColor } = useConstantTheme();
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
          className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
          style={styles.btnBg}
        >
          <FontAwesome
            name={elem.toLowerCase() as IProviders}
            color={backgroundColor}
            size={25}
          />
          <Text
            style={styles.btnText}
            className="text-center font-['Poppins'] text-xl"
          >
            Continue with {elem}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
