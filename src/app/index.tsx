import { FontAwesome } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useConstantTheme } from "@/hooks/use-theme";
import { Link } from "expo-router";

export default function Root() {
  const { styles, backgroundColor } = useConstantTheme();
  return (
    <SafeAreaView style={styles.bg}>
      <View
        style={styles.bg}
        className="h-full w-full items-center justify-center gap-5 py-7"
      >
        <View className="flex-1 gap-3">
          <Text
            style={styles.fg}
            className="text-center font-['Jersey'] text-7xl font-bold italic "
          >
            Code Compass
          </Text>
          <View>
            <Text
              style={styles.fg}
              className="px-5 text-center font-['Jersey'] text-3xl"
            >
              Unleash the Power of Code at your Fingertips!
            </Text>
          </View>
        </View>
        <View className="w-[90%] items-center justify-end gap-y-2">
          <Link href="/(tabs)/home" asChild>
            <TouchableOpacity
              className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
              style={styles.btnBg}
            >
              <FontAwesome name="google" color={backgroundColor} size={25} />
              <Text
                style={styles.btnText}
                className="text-center font-['Poppins'] text-xl"
              >
                Login with Google
              </Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/home" asChild>
            <TouchableOpacity
              style={styles.btnBg}
              className="w-full flex-row items-center justify-center gap-3 rounded-xl bg-black py-4 dark:bg-white"
            >
              <FontAwesome name="github" color={backgroundColor} size={25} />
              <Text
                style={styles.btnText}
                className="text-center font-['Poppins'] text-xl"
              >
                Login with Github
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
