import "react-native-gesture-handler";
import "@/global.css";

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from "@/hooks/use-fonts";
import { useTheme } from "@/hooks/use-theme";

export default function RootLayout() {
  const [fontLoaded] = useFonts();
  const { setTheme } = useTheme();

  if (!fontLoaded) return null;
  return (
    <>
      <StatusBar style={setTheme("light", "dark")} />
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </>
  );
}
