import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "@/hooks/use-fonts";
import { useConstantTabOptions } from "@/hooks/use-screen-options";
import { useTheme } from "@/hooks/use-theme";

function RootLayout() {
  const [fontLoaded] = useFonts();
  const { setTheme } = useTheme();

  const { tabContainerStyle, tabOptions } = useConstantTabOptions();

  if (!fontLoaded) return null;
  return (
    <>
      <StatusBar style={setTheme("light", "dark")} />
      <Tabs sceneContainerStyle={tabContainerStyle} screenOptions={tabOptions}>
        <Tabs.Screen
          name="(stack)"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ size, color }) => (
              <Ionicons
                name="file-tray-full-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="info" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default RootLayout;
