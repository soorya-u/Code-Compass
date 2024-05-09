import { ScrollView, View } from "react-native";

import AuthProviders from "@/components/AuthProviders";
import { useConstantTheme } from "@/hooks/use-theme";

export default function LoginScreen() {
  const { styles } = useConstantTheme();

  return (
    <ScrollView
      contentContainerClassName="flex-1 py-4 justify-start items-center"
      style={styles.bg}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View className="w-full"></View>
      <AuthProviders />
    </ScrollView>
  );
}
