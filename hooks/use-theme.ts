import { useColorScheme } from "nativewind";

export const useTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  return { isDark, toggleColorScheme };
};
