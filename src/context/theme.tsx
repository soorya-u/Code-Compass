import { useColorScheme } from "nativewind";
import { createContext, PropsWithChildren, useCallback, useMemo } from "react";

type ThemeContextType = {
  isDark: boolean;
  setTheme: <T>(darkSetting: T, lightSetting: T) => T;
  theme: { primary: string; secondary: string; primaryActive: string };
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  setTheme: (a, _b) => a,
  theme: {
    primary: "rgb(10 10 10)",
    secondary: "rgb(229 231 235)",
    primaryActive: "rgb(30 30 30)",
  },
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  const { colorScheme } = useColorScheme();

  const isDark = useMemo(() => colorScheme === "dark", [colorScheme]);

  function setThemeFunc<T>(darkSetting: T, lightSetting: T) {
    return isDark ? darkSetting : lightSetting;
  }

  const setTheme = useCallback(setThemeFunc, [isDark]);

  const theme = useMemo(
    () => ({
      primary: setTheme("rgb(10 10 10)", "rgb(229 231 235)"),
      secondary: setTheme("rgb(229 231 235)", "rgb(10 10 10)"),
      primaryActive: setTheme("rgb(30 30 30)", "rgb(250 250 250)"),
    }),
    [setTheme],
  );

  return (
    <ThemeContext.Provider value={{ isDark, setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
