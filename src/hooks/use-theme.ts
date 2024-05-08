import { useColorScheme } from "nativewind";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

export const useTheme = () => {
  const { colorScheme, toggleColorScheme: nwtoggleColorScheme } =
    useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const setTheme = <T>(darkSetting: T, lightSetting: T) =>
    isDark ? darkSetting : lightSetting;

  const toggleColorScheme = () => {
    nwtoggleColorScheme();
    setIsDark(colorScheme === "dark");
  };

  return { isDark, toggleColorScheme, setTheme };
};

export const useConstantTheme = () => {
  const { setTheme } = useTheme();
  const backgroundColor = setTheme("rgb(10 10 10)", "rgb(229 231 235)");
  const foregroundColor = setTheme("rgb(229 231 235)", "rgb(10 10 10)");
  const activeBackground = setTheme("rgb(30 30 30)", "rgb(250 250 250)");

  const styles = StyleSheet.create({
    bg: {
      backgroundColor,
    },
    fg: {
      color: foregroundColor,
    },
    btnBg: {
      backgroundColor: foregroundColor,
    },
    btnText: {
      color: backgroundColor,
    },
    btnOutlineBg: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: foregroundColor,
      opacity: 0.8,
    },
    btnOutlineText: {
      color: foregroundColor,
    },
    monochromeImage: {
      tintColor: foregroundColor,
    },
  });

  return { backgroundColor, foregroundColor, styles, activeBackground };
};
