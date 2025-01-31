import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

import { useConstantTheme } from "@/hooks/use-theme";
import { usePlatform } from "@/hooks/use-platform";

import DrawerContent from "@/components/DrawerContent";

export default function DrawerLayout() {
  const { activeBackground, backgroundColor, foregroundColor } =
    useConstantTheme();
  const { setPlatformSettings } = usePlatform();

  const bgColor = setPlatformSettings({
    ios: activeBackground,
    android: backgroundColor,
  });

  return (
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
        drawerInactiveBackgroundColor: bgColor,
        drawerInactiveTintColor: foregroundColor,
        drawerActiveBackgroundColor: foregroundColor,
        drawerActiveTintColor: bgColor,
        drawerStatusBarAnimation: "fade",
        drawerItemStyle: { borderRadius: 15 },
        drawerContentContainerStyle: { flex: 1 },
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 18,
          fontFamily: "Inder",
        },
      }}
    >
      <Drawer.Screen
        name="(stack)"
        options={{
          drawerLabel: "Home",
          headerTitle: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons className="mr-5" name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="upload"
        options={{
          drawerLabel: "Upload",
          headerTitle: "Upload",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              className="mr-5"
              name="cloud-upload"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          headerTitle: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              className="mr-5"
              name="person"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "About",
          headerTitle: "About",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              className="mr-5"
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer>
  );
}
