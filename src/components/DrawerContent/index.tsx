import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { useConstantTheme } from "@/hooks/use-theme";
import { usePlatform } from "@/hooks/use-platform";
import { Image, Text, View } from "react-native";

import logo from "@/assets/icons/icon.png";

const uri = Image.resolveAssetSource(logo).uri;

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
          className="aspect-square size-[65px]"
          source={{ uri }}
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
      <View className="mx-auto my-8 h-[2px] w-[95%] rounded-md bg-stone-300 dark:bg-neutral-600" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
