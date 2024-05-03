import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";

import { useConstantTheme } from "@/hooks/use-theme";

import logo from "@/assets/icons/icon.png";
import { projects, sections } from "@/constants/about";

const uri = Image.resolveAssetSource(logo).uri;

export default function About() {
  const { styles } = useConstantTheme();

  return (
    <ScrollView
      contentContainerClassName="flex-1 py-4 gap-10"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View className="flex-row items-center justify-center gap-3">
        <Image src={uri} className="size-16" style={styles.monochromeImage} />
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
      <View className="gap-2 px-4">
        <Text className="pb-2 font-['Poppins'] text-2xl text-black dark:text-white">
          Explore my other Projects!
        </Text>
        {projects.map((project, idx) => (
          <Link key={idx} href={project.url} asChild>
            <View className="flex-row items-center gap-3 pl-4">
              <Image src={`${project.url}/logo.png`} className="size-8" />
              <Text style={project.style.text} className="text-3xl">
                {project.name}
              </Text>
            </View>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
