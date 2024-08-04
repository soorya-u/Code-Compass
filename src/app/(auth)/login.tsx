import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { useConstantTheme } from "@/hooks/use-theme";

import AuthProviders from "@/components/AuthProviders";
import AuthForm from "@/components/AuthForm";

export default function LoginScreen() {
  const { height } = useWindowDimensions();
  const { styles } = useConstantTheme();

  return (
    <KeyboardAvoidingView className="flex-1">
      <ScrollView
        contentContainerStyle={{
          minHeight: height * 0.90,
        }}
        contentContainerClassName="flex-1 items-center justify-start py-4"
        style={styles.bg}
      >
        <View className="w-[85%] py-5">
          <Text className="text-center font-['Poppins'] text-2xl text-black dark:text-white">
            Enter your Credentials to Login
          </Text>
        </View>
        <AuthForm type="login" />
        <View className="my-6 w-[85%] flex-row items-center justify-center gap-3">
          <View className="h-1 w-[85%] flex-1 rounded bg-[#a3acb9] dark:bg-[#33373b]" />
          <Text className="font-[Inder] text-xl text-[#a3acb9] dark:text-[#33373b]">
            OR
          </Text>
          <View className="h-1 w-[85%] flex-1 rounded bg-[#a3acb9] dark:bg-[#33373b]" />
        </View>
        <View className="mb-6 w-[85%]">
          <Text className="text-center font-['Poppins'] text-2xl text-black dark:text-white">
            Continue with
          </Text>
        </View>
        <AuthProviders />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
