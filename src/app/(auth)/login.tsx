import { ScrollView, Text, View } from "react-native";
import { useConstantTheme } from "@/hooks/use-theme";

import AuthProviders from "@/components/AuthProviders";
import AuthForm from "@/components/AuthForm";

export default function LoginScreen() {
  const { styles } = useConstantTheme();

  return (
    <ScrollView
      contentContainerClassName="flex-1 py-4 justify-start items-center"
      style={styles.bg}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View className="my-6 w-[85%]">
        <Text className="text-center font-['Poppins'] text-2xl text-white">
          Enter your Credentials to Login
        </Text>
      </View>
      <AuthForm type="login" />
      <View className="mb-6 mt-2 w-[85%] flex-row items-center justify-center gap-3">
        <View className="h-1 w-[85%] flex-1 rounded bg-stone-300 dark:bg-neutral-600" />
        <Text className="font-[Inder] text-xl text-stone-300 dark:text-neutral-600">
          OR
        </Text>
        <View className="h-1 w-[85%] flex-1 rounded bg-stone-300 dark:bg-neutral-600" />
      </View>
      <View className="w-[85%] mb-6">
        <Text className="text-center font-['Poppins'] text-2xl text-white">
          Continue with
        </Text>
      </View>
      <AuthProviders />
    </ScrollView>
  );
}
