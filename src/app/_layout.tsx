import "react-native-gesture-handler";
import "@/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useFonts } from "@/hooks/use-fonts";

import { LogoIcon } from "@/components/icons";

import { setTheme } from "@/utils/setters";
import { stackOptions } from "@/constants/options";

export default function RootLayout() {
  const [fontLoaded] = useFonts();

  if (!fontLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style={setTheme("light", "dark")} />
      <Stack screenOptions={stackOptions}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)"
          options={{
            headerLeft: undefined,
            headerLargeTitle: false,
            headerBackTitle: "Back",
            headerTitle: "Connect with Us",
            headerRight: () => (
              <LogoIcon tintColor={setTheme("white", "black")} />
            ),
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
