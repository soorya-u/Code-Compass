import { Fragment } from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { useTheme } from "@/hooks/use-theme";

export default function SignInButtons() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://code-compass.soorya-u.dev")}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl border-2 border-secondary bg-transparent py-4 opacity-85"
      >
        <FontAwesome6 name="globe" color={theme.secondary} size={20} />
        <Text className="text-center font-poppins text-xl text-secondary">
          Visit our Site
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/(auth)/login")}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl bg-secondary py-4"
      >
        <FontAwesome6 name="link" color={theme.primary} size={20} />
        <Text className="text-center font-poppins text-xl text-primary">
          Connect with Us
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
}
