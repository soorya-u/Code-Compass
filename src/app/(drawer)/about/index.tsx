import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { sections } from "@/constants/about";
import { theme } from "@/constants/theme";

import logo from "@/assets/icons/logo.png";

export default function About() {
  const rotation = useSharedValue<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      rotation.value += 10;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <ScrollView
      contentContainerClassName="flex-1 py-4 gap-10"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View className="flex-row items-center justify-center gap-3">
        <Animated.Image
          source={logo}
          className="size-16"
          style={[{ tintColor: theme.secondary }, animatedImageStyle]}
          alt="logo"
          sharedTransitionTag="logo"
        />
        <Text className="font-jersey text-5xl text-black dark:text-white">
          Code Compass
        </Text>
      </View>
      {sections.map((section, idx) => (
        <View key={idx} className="gap-2 px-4">
          <Text className="font-poppins text-2xl text-black dark:text-white">
            {section.heading}
          </Text>
          <Text className="pl-3 font-inder text-lg leading-tight text-black dark:text-white">
            {section.paragraph}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
