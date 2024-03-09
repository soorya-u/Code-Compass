import { useFonts as useFont } from "expo-font";
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

export const usePoppinsFont = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFont({
    Poppins: require("@/assets/fonts/Poppins-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return { poppins: "Poppins", onLayout: onLayoutRootView };
};

export const useUbuntuNerdFont = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFont({
    "Ubuntu-Nerd": require("@/assets/fonts/UbuntuNerdFont-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return { ubuntuNerd: "Ubuntu-Nerd", onLayout: onLayoutRootView };
};
