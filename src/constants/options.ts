import { DrawerIcon } from "@/components/icons";
import { setPlatformSettings } from "@/utils/platform";

import { type BottomTabNavigationOptions } from "@react-navigation/bottom-tabs/src/types";
import { type NativeStackNavigationOptions } from "@react-navigation/native-stack/src/types";

type ThemeContextType = {
  setTheme: <T>(darkSetting: T, lightSetting: T) => T;
  theme: { primary: string; secondary: string; primaryActive: string };
};

export const stackOptions = ({
  theme,
  setTheme,
}: ThemeContextType): NativeStackNavigationOptions => ({
  headerLeft: ({ tintColor: color }) => DrawerIcon({ color }),
  headerTransparent: setPlatformSettings({ ios: true }),
  headerLargeTitle: true,
  headerShadowVisible: false,
  headerTintColor: theme.secondary,
  contentStyle: { backgroundColor: theme.primary },
  headerStyle: {
    backgroundColor: setPlatformSettings({
      ios: setTheme(theme.primaryActive, "rgb(245 245 245)"),
      android: setTheme("#000", theme.primary),
    }),
  },
  headerBlurEffect: setTheme("dark", "light"),
});

export const tabOptions = ({
  theme,
  setTheme,
}: ThemeContextType): BottomTabNavigationOptions => ({
  sceneStyle: { backgroundColor: theme.primary },
  headerShown: false,
  tabBarStyle: {
    backgroundColor: theme.primary,
    borderTopColor: setTheme("#33373b", "#a3acb9"),
  },
  tabBarActiveTintColor: theme.secondary,
  tabBarActiveBackgroundColor: theme.primary,
  tabBarInactiveBackgroundColor: theme.primary,
  headerTintColor: theme.secondary,
  headerShadowVisible: false,
});
