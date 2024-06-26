import { useRef, useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import CarouselElement, {
  type ICarouselInstance,
} from "react-native-reanimated-carousel";

import { carouselContent } from "@/constants/carousel";
import { useConstantTheme } from "@/hooks/use-theme";
import Animated from "react-native-reanimated";

export default function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);
  const { width, height } = useWindowDimensions();
  const { styles } = useConstantTheme();

  return (
    <View className="relative flex-1 items-center justify-center">
      <CarouselElement
        ref={carouselRef}
        style={{
          position: "relative",
        }}
        onProgressChange={(_, idx) => setCurrentSlideIndex(+idx.toFixed() % 4)}
        autoPlay
        autoPlayInterval={3000}
        mode="parallax"
        width={width}
        data={carouselContent}
        renderItem={({ item }) => (
          <View className="w-full flex-1 items-center justify-center gap-4">
            <Animated.Image
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
            onTouchEndCapture={() =>
              carouselRef.current?.scrollTo({
                index: idx,
              })
            }
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
  );
}
