import { useFonts as useFont } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export const useFonts = () => {
  const [jetbrainsMonoNerdLoaded] = useFont({
    "Jetbrains-Mono-Nerd": require("@/assets/fonts/JetBrainsMonoNerdFont-Medium.ttf"),
  });
  const [poppinsLoaded] = useFont({
    Poppins: require("@/assets/fonts/Poppins-Medium.ttf"),
  });
  const [ubuntuNerdLoaded] = useFont({
    "Ubuntu-Nerd": require("@/assets/fonts/UbuntuNerdFont-Medium.ttf"),
  });
  const [inderLoaded] = useFont({
    Inder: require("@/assets/fonts/Inder-Regular.ttf"),
  });

  useEffect(() => {
    async function init() {
      await SplashScreen.preventAutoHideAsync();
      if (jetbrainsMonoNerdLoaded && poppinsLoaded && ubuntuNerdLoaded)
        await SplashScreen.hideAsync();
    }
    init();
  }, [jetbrainsMonoNerdLoaded, poppinsLoaded, ubuntuNerdLoaded, inderLoaded]);

  const isLoaded =
    jetbrainsMonoNerdLoaded && poppinsLoaded && ubuntuNerdLoaded && inderLoaded;
  return [isLoaded];
};
