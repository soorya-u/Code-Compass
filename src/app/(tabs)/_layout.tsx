import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { useConstantTabOptions } from "@/hooks/use-screen-options";

export default function TabsLayout() {
  const { tabContainerStyle, tabOptions } = useConstantTabOptions();

  return (
    <Tabs sceneContainerStyle={tabContainerStyle} screenOptions={tabOptions}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="file-tray-full-outline" size={size} color={color} />
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
        name="bookmark"
        options={{
          tabBarLabel: "Bookmarks",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          tabBarLabel: "Upload",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="upload" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
