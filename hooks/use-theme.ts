import { useColorScheme } from "nativewind";

export const useTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const setTheme = <T>(darkSetting: T, lightSetting: T) =>
    isDark ? darkSetting : lightSetting;

  return { isDark, toggleColorScheme, setTheme };
};
