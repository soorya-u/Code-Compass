import { Image, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import Animated from "react-native-reanimated";

import { setPlatformSettings } from "@/utils/platform";

import logo from "@/assets/icons/logo.png";
import { useTheme } from "@/hooks/use-theme";

export default function DrawerContent(props: any) {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: setPlatformSettings({
          ios: theme.primaryActive,
          android: theme.primary,
        }),
      }}
      scrollEnabled={false}
      {...props}
    >
      <DrawerItem
        onPress={() => router.replace("/")}
        label={() => (
          <View className="mt-10 flex-row items-center justify-start gap-4 pl-2">
            <Animated.Image
              style={{ tintColor: theme.secondary }}
              className="aspect-square size-[65px]"
              source={logo}
              alt="logo"
            />
            <View className="">
              <Text className="font-jersey text-[40px] text-black dark:text-white">
                Code
              </Text>
              <Text className="font-jersey text-[40px] text-black dark:text-white">
                Compass
              </Text>
            </View>
          </View>
        )}
      ></DrawerItem>
      <View className="mx-auto my-8 h-[2px] w-[95%] rounded-md bg-stone-300 dark:bg-neutral-600" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
