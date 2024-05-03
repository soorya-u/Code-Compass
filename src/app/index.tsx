import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";

import { useConstantTheme } from "@/hooks/use-theme";
import { carouselContent } from "@/constants/carousel";
import { useState } from "react";

export default function Root() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const { styles, backgroundColor } = useConstantTheme();
  const { width, height } = useWindowDimensions();

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
        <View className="relative flex-1 items-center justify-center">
          <Carousel
            style={{
              position: "relative",
            }}
            onProgressChange={(_, idx) =>
              setCurrentSlideIndex(+idx.toFixed() % 4)
            }
            autoPlay
            autoPlayInterval={3000}
            mode="parallax"
            width={width}
            data={carouselContent}
            renderItem={({ item }) => (
              <View className="w-full flex-1 items-center justify-center gap-4">
                <Image
                  className="size-[60px]"
                  style={styles.monochromeImage}
                  src={item.image}
                />
                <Text className="px-5 font-['Poppins'] text-4xl text-black dark:text-white">
                  {item.heading}
                </Text>
                <Text className="text-pretty px-6 font-['Inder'] text-xl leading-6 text-black dark:text-white">
                  {item.paragraph}
                </Text>
              </View>
            )}
          />
          <View
            style={{ top: height / 2 - 50 }}
            className="absolute flex-row items-center gap-2"
          >
            {carouselContent.map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.btnBg,
                  {
                    opacity: currentSlideIndex === idx ? 1 : 0.25,
                    width: currentSlideIndex === idx ? 10 : 8,
                  },
                ]}
                className="aspect-square rounded-full"
              />
            ))}
          </View>
        </View>
        <View className="w-[90%] items-center justify-center gap-y-2">
          <Link href="/(drawer)/(stack)/(tabs)/browse" asChild>
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
          <Link href="/(drawer)/(stack)/(tabs)/browse" asChild>
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
