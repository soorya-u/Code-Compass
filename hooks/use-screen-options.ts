import { useEffect } from "react";
import { useNavigation } from "expo-router";
import { type NativeStackNavigationOptions } from "@react-navigation/native-stack/src/types";
import { type BottomTabNavigationOptions } from "@react-navigation/bottom-tabs/src/types";

import { useConstantTheme, useTheme } from "./use-theme";
import { usePlatform } from "./use-platform";
import { type StyleProp, type ViewStyle } from "react-native";

export const useScreenOptions = (options: NativeStackNavigationOptions) => {
  const navigate = useNavigation();
  const { isDark } = useTheme();

  useEffect(() => {
    navigate.setOptions(options);
  }, [navigate, isDark]);
};

export const useConstantStackOptions = () => {
  const { backgroundColor, foregroundColor } = useConstantTheme();
  const { setTheme } = useTheme();
  const { setPlatformSettings } = usePlatform();

  const stackOptions: NativeStackNavigationOptions = {
    headerTransparent: setPlatformSettings({ ios: true }),
    headerLargeTitle: true,
    headerShadowVisible: false,
    headerTintColor: foregroundColor,
    contentStyle: {
      backgroundColor: backgroundColor,
    },
    headerStyle: {
      backgroundColor: setPlatformSettings({ android: backgroundColor }),
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
      backgroundColor: backgroundColor,
      borderTopColor: setTheme("#33373b", "#a3acb9"),
    },
    tabBarActiveTintColor: foregroundColor,
    tabBarActiveBackgroundColor: backgroundColor,
    tabBarInactiveBackgroundColor: backgroundColor,
    headerTintColor: foregroundColor,
    headerShadowVisible: false,
  };

  const tabContainerStyle: StyleProp<ViewStyle> = {
    backgroundColor: backgroundColor,
  };

  return { tabOptions, tabContainerStyle };
};
