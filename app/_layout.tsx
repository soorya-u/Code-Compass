import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "@/hooks/use-fonts";
import { useTheme } from "@/hooks/use-theme";

function RootLayout() {
  const [fontLoaded] = useFonts();
  const { isDark } = useTheme();

  if (!fontLoaded) return null;
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: true,
        headerBackgroundContainerStyle: {
          backgroundColor: isDark ? "#000" : "#fff",
        },
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
            <Ionicons name="information-circle" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default RootLayout;
