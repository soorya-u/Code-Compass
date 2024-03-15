import { useColorScheme } from "nativewind";

export const useTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const setTheme = (darkSetting: string, lightSetting: string) =>
    isDark ? darkSetting : lightSetting;

  return { isDark, toggleColorScheme, setTheme };
};
