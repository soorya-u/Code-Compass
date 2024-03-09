import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "@/hooks/use-fonts";

function RootLayout() {
  const [fontLoaded] = useFonts();

  if (!fontLoaded) return null;
  return (
    <Tabs>
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
            <Ionicons name="information-circle" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default RootLayout;
