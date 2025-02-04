import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { tabOptions } from "@/constants/options";
import { useTheme } from "@/hooks/use-theme";

export default function TabsLayout() {
  const theme = useTheme();
  return (
    <Tabs screenOptions={tabOptions(theme)}>
      <Tabs.Screen
        name="browse"
        options={{
          tabBarLabel: "Browse",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          tabBarLabel: "Library",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="downloads"
        options={{
          tabBarLabel: "Downloads",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="download" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
