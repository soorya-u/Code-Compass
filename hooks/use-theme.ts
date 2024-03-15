import { useColorScheme } from "nativewind";
import { Appearance } from "react-native";

export const useTheme = () => {
  const { colorScheme, toggleColorScheme: nwtoggleColorScheme } =
    useColorScheme();
  const isDark = colorScheme === "dark";

  const setTheme = <T>(darkSetting: T, lightSetting: T) =>
    isDark ? darkSetting : lightSetting;

  const toggleColorScheme = () => {
    nwtoggleColorScheme();
    Appearance.setColorScheme(colorScheme);
  };

  return { isDark, toggleColorScheme, setTheme };
};
