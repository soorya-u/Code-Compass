import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { Tabs } from "expo-router";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { useFonts } from "@/hooks/use-fonts";
import { useTheme } from "@/hooks/use-theme";

function RootLayout() {
  const [fontLoaded] = useFonts();
  const { setTheme } = useTheme();

  const backgroundColor = setTheme("black", "white");
  const foregroundColor = setTheme("white", "black");

  if (!fontLoaded) return null;
  return (
    <>
      <StatusBar style={setTheme("light", "dark") as StatusBarStyle} />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: backgroundColor,
          },
          tabBarActiveTintColor: foregroundColor,
          tabBarActiveBackgroundColor: backgroundColor,
          tabBarInactiveBackgroundColor: backgroundColor,
          headerStyle: {
            backgroundColor: backgroundColor,
          },
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
            headerTitle: "About",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="info" size={32} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerTitle: "Settings",
            tabBarIcon: ({ color }) => (
              <Ionicons name="cog" size={32} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default RootLayout;
