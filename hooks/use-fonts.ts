import { useFonts as useFont, loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export const useJetBrainsNerdFont = () => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, fontError] = useFont({
    "Jetbrains-Mono-Nerd": require("@/assets/fonts/JetBrainsMonoNerdFont-Medium.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  return { jetBrainsNerd: "Jetbrains-Mono-Nerd", onLayout: onLayoutRootView };
};
