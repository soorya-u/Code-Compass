import { DrawerIcon } from "@/components/icons";
import { setPlatformSettings, setTheme } from "@/utils/setters";
import { theme } from "@/constants/theme";

import { type BottomTabNavigationOptions } from "@react-navigation/bottom-tabs/src/types";
import { type NativeStackNavigationOptions } from "@react-navigation/native-stack/src/types";

export const stackOptions: NativeStackNavigationOptions = {
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
};

export const tabOptions: BottomTabNavigationOptions = {
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
};
