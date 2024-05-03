import { Linking, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useConstantTheme } from "@/hooks/use-theme";
import { supabase } from "@/utils/supabase";

type IProviders = "google" | "github";

const providers = ["Google", "Github"];

const handlePress = async (provider: IProviders) => {
  let { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  if (!error && data.url) Linking.openURL(data.url);
};

export default function AuthComponent() {
  const { styles, backgroundColor } = useConstantTheme();

  return (
    <View className="w-[90%] items-center justify-center gap-y-2">
      {providers.map((elem, idx) => (
        <TouchableOpacity
          onPress={async () =>
            await handlePress(elem.toLowerCase() as IProviders)
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
            Login with {elem}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
