import {
  Switch,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "@/hooks/use-theme";
import { useScreenOptions } from "@/hooks/use-screen-options";

const HeaderIcon = ({ tintColor }: { tintColor: string | undefined }) => (
  <Link href={"/(stack)/"} asChild>
    <TouchableOpacity>
      <Ionicons name="chevron-back" size={25} color={tintColor} />
    </TouchableOpacity>
  </Link>
);

function Settings() {
  const { isDark, toggleColorScheme } = useTheme();

  useScreenOptions({
    presentation: "formSheet",
    headerTitle: "Settings",
    headerLargeTitle: false,
    headerLeft: ({ tintColor }) => <HeaderIcon tintColor={tintColor} />,
  });

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
