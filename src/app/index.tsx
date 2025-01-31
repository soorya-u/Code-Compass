import { Text, View } from "react-native";

import { useConstantTheme } from "@/hooks/use-theme";
import Carousel from "@/components/Carousel";
import ConnectComponent from "@/components/ConnectComponent";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Root() {
  const { styles } = useConstantTheme();

  return (
    <SafeAreaView>
      <View
        style={styles.bg}
        className="h-full w-full items-center justify-between py-[30]"
      >
        <View className="gap-3">
          <Text
            style={styles.fg}
            className="text-center font-['Jersey'] text-7xl"
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
        <ConnectComponent />
      </View>
    </SafeAreaView>
  );
}
