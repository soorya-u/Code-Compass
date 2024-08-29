import { Image, ScrollView, Text, View } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { useConstantTheme } from "@/hooks/use-theme";
import { sections } from "@/constants/about";

import logo from "@/assets/icons/logo.png";
import { useEffect } from "react";

const uri = Image.resolveAssetSource(logo).uri;

export default function About() {
  const { styles } = useConstantTheme();

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
          src={uri}
          className="size-16"
          style={[styles.monochromeImage, animatedImageStyle]}
          alt="logo"
          sharedTransitionTag="logo"
        />
        <Text className="font-['Jersey'] text-5xl text-black dark:text-white">
          Code Compass
        </Text>
      </View>
      {sections.map((section, idx) => (
        <View key={idx} className="gap-2 px-4">
          <Text className="font-['Poppins'] text-2xl text-black dark:text-white">
            {section.heading}
          </Text>
          <Text className="pl-3 font-['Inder'] text-lg leading-tight text-black dark:text-white">
            {section.paragraph}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
