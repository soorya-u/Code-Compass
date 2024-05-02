import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { useConstantTheme } from "@/hooks/use-theme";
import { usePlatform } from "@/hooks/use-platform";
import { Image, Text, View } from "react-native";

const logo = require("@/assets/icons/icon.png");

export default function DrawerContent(props: any) {
  const { activeBackground, backgroundColor, foregroundColor } =
    useConstantTheme();
  const { setPlatformSettings } = usePlatform();

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: setPlatformSettings({
          ios: activeBackground,
          android: backgroundColor,
        }),
      }}
      scrollEnabled={false}
      {...props}
    >
      <View className="mt-10 flex-row items-center justify-start gap-4 pl-4">
        <Image
          style={{
            tintColor: foregroundColor,
          }}
          className="aspect-square h-[65px] w-[65px]"
          source={logo}
          alt="logo"
        />
        <View className="">
          <Text className="font-['Jersey'] text-[40px] text-black dark:text-white">
            Code
          </Text>
          <Text className="font-['Jersey'] text-[40px] text-black dark:text-white">
            Compass
          </Text>
        </View>
      </View>
      <View className="my-8 h-[2px] w-[95%] rounded-md mx-auto bg-stone-300 dark:bg-neutral-600" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
