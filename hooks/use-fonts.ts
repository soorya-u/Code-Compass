import { useFonts as useFont } from "expo-font";

export const useJetBrainsNerdFont = () => {
  useFont({
    "Jetbrains-Mono-Nerd": require("@/assets/fonts/JetBrainsMonoNerdFont-Medium.ttf"),
  });
  return "Jetbrains-Mono-Nerd";
};
