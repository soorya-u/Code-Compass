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

export const useConstantTheme = () => {
  const { setTheme } = useTheme();
  const backgroundColor = setTheme("rgb(10 10 10)", "rgb(229 231 235)");
  const foregroundColor = setTheme("rgb(229 231 235)", "rgb(10 10 10)");

  return { backgroundColor, foregroundColor };
};
