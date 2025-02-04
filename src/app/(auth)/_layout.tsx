import { SafeAreaView, useWindowDimensions } from "react-native";
import { withLayoutContext } from "expo-router";

import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

import { useTheme } from "@/hooks/use-theme";

import { setPlatformSettings } from "@/utils/platform";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function AuthLayout() {
  const { width } = useWindowDimensions();

  const { setTheme, theme } = useTheme();

  return (
    <SafeAreaView className="flex-1">
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: theme.secondary,
          tabBarLabelStyle: {
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: 17,
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.secondary,
            height: 4,
            width: width / 2,
            borderRadius: 15,
          },
          tabBarIndicatorContainerStyle: {
            backgroundColor: setPlatformSettings({
              ios: setTheme(theme.primary, "rgb(245 245 245)"),
              android: setTheme("#000", theme.primary),
            }),
          },
          tabBarContentContainerStyle: { height: 50 },
          tabBarItemStyle: { width: width / 2 },
        }}
      >
        <MaterialTopTabs.Screen name="login" options={{ title: "Login" }} />
        <MaterialTopTabs.Screen name="signup" options={{ title: "Sign Up" }} />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}
