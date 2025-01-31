import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { tabOptions } from "@/constants/options";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={tabOptions}>
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
