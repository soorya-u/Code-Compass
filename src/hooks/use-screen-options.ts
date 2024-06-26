import { type BottomTabNavigationOptions } from "@react-navigation/bottom-tabs/src/types";
import { type NativeStackNavigationOptions } from "@react-navigation/native-stack/src/types";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { type StyleProp, type ViewStyle } from "react-native";

import { usePlatform } from "./use-platform";
import { useConstantTheme, useTheme } from "./use-theme";

import { DrawerIcon } from "@/components/Icons";

export const useScreenOptions = (options: NativeStackNavigationOptions) => {
  const navigate = useNavigation();
  const { isDark } = useTheme();

  useEffect(() => {
    navigate.setOptions(options);
  }, [navigate, isDark]);
};

export const useConstantStackOptions = () => {
  const { backgroundColor, foregroundColor, activeBackground } =
    useConstantTheme();
  const { setTheme } = useTheme();
  const { setPlatformSettings } = usePlatform();

  const stackOptions: NativeStackNavigationOptions = {
    headerLeft: ({ tintColor: color }) => DrawerIcon({ color }),
    headerTransparent: setPlatformSettings({ ios: true }),
    headerLargeTitle: true,
    headerShadowVisible: false,
    headerTintColor: foregroundColor,
    contentStyle: {
      backgroundColor,
    },
    headerStyle: {
      backgroundColor: setPlatformSettings({
        ios: setTheme(activeBackground, "rgb(245 245 245)"),
        android: setTheme("#000", backgroundColor),
      }),
    },
    headerBlurEffect: setTheme("dark", "light"),
  };

  return stackOptions;
};

export const useConstantTabOptions = () => {
  const { backgroundColor, foregroundColor } = useConstantTheme();
  const { setTheme } = useTheme();

  const tabOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor,
      borderTopColor: setTheme("#33373b", "#a3acb9"),
    },
    tabBarActiveTintColor: foregroundColor,
    tabBarActiveBackgroundColor: backgroundColor,
    tabBarInactiveBackgroundColor: backgroundColor,
    headerTintColor: foregroundColor,
    headerShadowVisible: false,
  };

  const tabContainerStyle: StyleProp<ViewStyle> = {
    backgroundColor,
  };

  return { tabOptions, tabContainerStyle };
};
