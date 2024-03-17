import { Switch, SafeAreaView, View, Text } from "react-native";
import { useTheme } from "@/hooks/use-theme";

function Settings() {
  const { isDark, toggleColorScheme } = useTheme();
  return (
    <SafeAreaView className="h-full p-4 items-center">
      <View className="m-4 px-4 py-2 bg-neutral-50 dark:bg-[rgb(30_30_30)] rounded-xl w-[95%] flex-row justify-between items-center">
        <Text className="text-base text-black dark:text-white">
          Switch Mode
        </Text>
        <Switch value={isDark} onValueChange={() => toggleColorScheme()} />
      </View>
    </SafeAreaView>
  );
}

export default Settings;
