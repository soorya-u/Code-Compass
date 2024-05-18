import { Linking, Text, TouchableOpacity } from "react-native";

import { useConstantTheme } from "@/hooks/use-theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignInButtons() {
  const { styles, backgroundColor, foregroundColor } = useConstantTheme();
  const router = useRouter();

  return (
    <>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://code-compass.soorya-u.dev")}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
        style={styles.btnOutlineBg}
      >
        <FontAwesome6 name="globe" color={foregroundColor} size={20} />
        <Text
          style={styles.btnOutlineText}
          className="text-center font-['Poppins'] text-xl"
        >
          Visit our Site
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/(auth)/login")}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
        style={true ? styles.btnBg : styles.btnOutlineBg}
      >
        <FontAwesome6
          name="link"
          color={true ? backgroundColor : foregroundColor}
          size={20}
        />
        <Text
          style={true ? styles.btnText : styles.btnOutlineText}
          className="text-center font-['Poppins'] text-xl"
        >
          Connect with Us
        </Text>
      </TouchableOpacity>
    </>
  );
}
