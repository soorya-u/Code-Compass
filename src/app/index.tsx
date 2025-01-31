import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Carousel from "@/components/carousel";
import ConnectComponent from "@/components/connect-component";

export default function Root() {
  return (
    <SafeAreaView>
      <View className="bg-primary h-full w-full items-center justify-between py-[30]">
        <View className="gap-3">
          <Text className="text-secondary font-jersey text-center text-7xl">
            Code Compass
          </Text>
          <View>
            <Text className="text-secondary font-jersey px-5 text-center text-3xl">
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
