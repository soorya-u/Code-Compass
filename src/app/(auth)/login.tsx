import { ScrollView, Text, View, KeyboardAvoidingView } from "react-native";
import { useConstantTheme } from "@/hooks/use-theme";

import AuthProviders from "@/components/AuthProviders";
import AuthForm from "@/components/AuthForm";

export default function LoginScreen() {
  const { styles } = useConstantTheme();

  return (
    <KeyboardAvoidingView className="flex-1">
      <ScrollView
        contentContainerClassName="flex-1 py-4 justify-start items-center"
        style={styles.bg}
      >
        <View className="my-6 w-[85%]">
          <Text className="text-center font-['Poppins'] text-2xl text-black dark:text-white">
            Enter your Credentials to Login
          </Text>
        </View>
        <AuthForm type="login" />
        <View className="mb-6 mt-2 w-[85%] flex-row items-center justify-center gap-3">
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
