import { Image, ScrollView, Text, View } from "react-native";

import { sections } from "@/constants/about";

import logo from "@/assets/icons/logo.png";
import { useTheme } from "@/hooks/use-theme";

export default function About() {
  const { theme } = useTheme();
  return (
    <ScrollView
      contentContainerClassName="flex-1 py-4 gap-10"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View className="flex-row items-center justify-center gap-3">
        <Image
          source={logo}
          className="size-16"
          style={{ tintColor: theme.secondary }}
          alt="logo"
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
