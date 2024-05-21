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

export default function SignUpScreen() {
  const { styles } = useConstantTheme();
  const { height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView className="flex-1">
      <ScrollView
        contentContainerStyle={{
          minHeight: height*1.183,
        }}
        contentContainerClassName="flex-1 py-4 justify-start items-center"
        style={styles.bg}
      >
        <View className="w-[85%] py-5">
          <Text className="text-center font-['Poppins'] text-2xl text-black dark:text-white">
            Enter your Credentials to Sign Up
          </Text>
        </View>
        <AuthForm type="sign-up" />
        <View className="mb-6 mt-2 w-[85%] flex-row items-center justify-center gap-3">
          <View className="h-1 w-[85%] flex-1 rounded bg-stone-300 dark:bg-neutral-600" />
          <Text className="font-[Inder] text-xl text-stone-300 dark:text-neutral-600">
            OR
          </Text>
          <View className="h-1 w-[85%] flex-1 rounded bg-stone-300 dark:bg-neutral-600" />
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
