import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { Tabs } from "expo-router";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { useFonts } from "@/hooks/use-fonts";
import { useTheme } from "@/hooks/use-theme";

function RootLayout() {
  const [fontLoaded] = useFonts();
  const { setTheme } = useTheme();

  const backgroundColor = setTheme("rgb(10 10 10)", "rgb(229 231 235)");
  const foregroundColor = setTheme("rgb(229 231 235)", "rgb(10 10 10)");

  if (!fontLoaded) return null;
  return (
    <>
      <StatusBar style={setTheme("light", "dark")} />
      <Tabs
        sceneContainerStyle={{
          backgroundColor: backgroundColor,
        }}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: backgroundColor,
          },
          tabBarActiveTintColor: foregroundColor,
          tabBarActiveBackgroundColor: backgroundColor,
          tabBarInactiveBackgroundColor: backgroundColor,
          headerTintColor: foregroundColor,
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="(stack)"
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="info" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerTitle: "Settings",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="cog" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default RootLayout;
