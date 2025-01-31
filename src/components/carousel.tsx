import { useRef, useState } from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import CarouselElement, {
  type ICarouselInstance,
} from "react-native-reanimated-carousel";

import { theme } from "@/constants/theme";
import { carouselContent } from "@/constants/carousel";

export default function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);
  const { width, height } = useWindowDimensions();

  return (
    <View className="relative flex-1 items-center justify-center">
      <CarouselElement
        ref={carouselRef}
        style={{ position: "relative" }}
        onProgressChange={(_, idx) => setCurrentSlideIndex(+idx.toFixed() % 4)}
        autoPlay
        autoPlayInterval={3000}
        mode="parallax"
        width={width * 1.1}
        data={carouselContent}
        renderItem={({ item }) => (
          <View className="w-full flex-1 items-center justify-center gap-4">
            <Image
              className="size-[60]"
              style={{ tintColor: theme.secondary }}
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
        className="absolute mt-3 flex-row items-center gap-3"
      >
        {carouselContent.map((_c, index) => (
          <View
            onTouchEndCapture={() => carouselRef.current?.scrollTo({ index })}
            key={index}
            className={`bg-secondary aspect-square rounded-full ${currentSlideIndex === index ? "w-2.5 opacity-100" : "w-2 opacity-80"}`}
          />
        ))}
      </View>
    </View>
  );
}
