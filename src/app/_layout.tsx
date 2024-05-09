import "react-native-gesture-handler";
import "@/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useFonts } from "@/hooks/use-fonts";
import { useTheme } from "@/hooks/use-theme";
import { useConstantStackOptions } from "@/hooks/use-screen-options";
import { LogoIcon } from "@/components/Icons";

export default function RootLayout() {
  const [fontLoaded] = useFonts();
  const { setTheme } = useTheme();
  const stackOptions = useConstantStackOptions();

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar style={setTheme("light", "dark")} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={stackOptions}>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
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
    </>
  );
}
