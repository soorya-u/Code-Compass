import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";

import AuthProviders from "@/components/auth-providers";
import AuthForm from "@/components/auth-form";

export default function LoginScreen() {
  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView className="flex-1">
      <ScrollView
        contentContainerStyle={{ minHeight: height * 0.9 }}
        contentContainerClassName="flex-1 items-center justify-start py-4 bg-primary"
      >
        <View className="w-[85%] py-5">
          <Text className="text-center font-poppins text-2xl text-black dark:text-white">
            Enter your Credentials to Login
          </Text>
        </View>
        <AuthForm type="login" />
        <View className="my-6 w-[85%] flex-row items-center justify-center gap-3">
          <View className="h-1 w-[85%] flex-1 rounded bg-[#a3acb9] dark:bg-[#33373b]" />
          <Text className="font-inder text-xl text-[#a3acb9] dark:text-[#33373b]">
            OR
          </Text>
          <View className="h-1 w-[85%] flex-1 rounded bg-[#a3acb9] dark:bg-[#33373b]" />
        </View>
        <View className="mb-6 w-[85%]">
          <Text className="text-center font-poppins text-2xl text-black dark:text-white">
            Continue with
          </Text>
        </View>
        <AuthProviders />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
