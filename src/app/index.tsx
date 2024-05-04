import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useConstantTheme } from "@/hooks/use-theme";
import Carousel from "@/components/Carousel";
import AuthComponent from "@/components/AuthComponent";

export default function Root() {
  const { styles } = useConstantTheme();

  return (
    <SafeAreaView style={styles.bg}>
      <View
        style={styles.bg}
        className="h-full w-full items-center justify-between py-7"
      >
        <View className="gap-3">
          <Text
            style={styles.fg}
            className="text-center font-['Jersey'] text-6xl font-bold italic "
          >
            Code Compass
          </Text>
          <View>
            <Text
              style={styles.fg}
              className="px-5 text-center font-['Jersey'] text-3xl"
            >
              Unleash the Power at your Fingertips!
            </Text>
          </View>
        </View>
        <Carousel />
        <AuthComponent />
      </View>
    </SafeAreaView>
  );
}
