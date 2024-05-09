import { withLayoutContext } from "expo-router";

import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

import { useConstantTheme } from "@/hooks/use-theme";
import { SafeAreaView, ScrollView, useWindowDimensions } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function AuthLayout() {
  const { foregroundColor } = useConstantTheme();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView className="flex-1">
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: foregroundColor,
          tabBarLabelStyle: {
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: 17,
          },
          tabBarIndicatorStyle: {
            backgroundColor: foregroundColor,
            height: 4,
            width: width / 2,
            borderRadius: 15,
          },
          tabBarIndicatorContainerStyle: {
            backgroundColor: "rgb(23 23 23)",
          },
          tabBarContentContainerStyle: {
            height: 50,
          },
          tabBarItemStyle: {
            width: width / 2,
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
