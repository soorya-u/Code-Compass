import { useEffect } from "react";
import { useFonts as useFont } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const useFonts = () => {
  const [fontsLoaded] = useFont({
    "Jetbrains-Mono-Nerd": require("@/assets/fonts/JetBrainsMonoNerdFont-Medium.ttf"),
    Poppins: require("@/assets/fonts/Poppins-Medium.ttf"),
    "Ubuntu-Nerd": require("@/assets/fonts/UbuntuNerdFont-Medium.ttf"),
    Inder: require("@/assets/fonts/Inder-Regular.ttf"),
    Jersey: require("@/assets/fonts/Jersey20-Regular.ttf"),
    "Chakra-Petch": require("@/assets/fonts/ChakraPetch-Medium.ttf"),
    Audiowide: require("@/assets/fonts/Audiowide-Regular.ttf"),
  });

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) await SplashScreen.hideAsync();
    })();
  }, [fontsLoaded]);

  return [fontsLoaded];
};
