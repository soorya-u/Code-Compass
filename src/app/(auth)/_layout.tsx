import { withLayoutContext } from "expo-router";

import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

import { useConstantTheme } from "@/hooks/use-theme";
import { SafeAreaView } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function AuthLayout() {
  const { foregroundColor, activeBackground } = useConstantTheme();

  return (
    <SafeAreaView className="flex-1">
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: foregroundColor,
          tabBarLabelStyle: {
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: 16,
          },
          tabBarIndicatorStyle: {
            backgroundColor: foregroundColor,
            height: 3,
          },
          tabBarIndicatorContainerStyle: {
            backgroundColor: activeBackground,
          },
          tabBarContentContainerStyle: {
            flex: 1,
            height: 45,
          },
          tabBarItemStyle: {
            paddingHorizontal: 35,
          },
        }}
      >
        <MaterialTopTabs.Screen
          name="login"
          options={{
            title: "Login",
          }}
        />
        <MaterialTopTabs.Screen
          name="signup"
          options={{
            title: "Sign Up",
          }}
        />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}
