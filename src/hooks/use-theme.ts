import { useState, useEffect } from "react";
import { useColorScheme } from "nativewind";

export const useTheme = () => {
  const { colorScheme, toggleColorScheme: nwtoggleColorScheme } =
    useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const toggleColorScheme = () => {
    nwtoggleColorScheme();
    setIsDark(colorScheme === "dark");
  };

  return { isDark, toggleColorScheme };
};
