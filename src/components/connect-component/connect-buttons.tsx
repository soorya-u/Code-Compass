import { Fragment } from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";

import { theme } from "@/constants/theme";

export default function SignInButtons() {
  const router = useRouter();

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://code-compass.soorya-u.dev")}
        className="border-secondary w-full flex-row items-center justify-center gap-3 rounded-xl border-2 bg-transparent py-4 opacity-85"
      >
        <FontAwesome6 name="globe" color={theme.secondary} size={20} />
        <Text className="text-secondary text-center font-['Poppins'] text-xl">
          Visit our Site
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/(auth)/login")}
        className="bg-secondary w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
      >
        <FontAwesome6 name="link" color={theme.primary} size={20} />
        <Text className="text-primary text-center font-['Poppins'] text-xl">
          Connect with Us
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
}
