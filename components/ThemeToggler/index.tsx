import { Switch } from "react-native";

import { useTheme } from "@/hooks/use-theme";
function ThemeToggler() {
  const { isDark, toggleColorScheme } = useTheme();

  return (
    <Switch
      thumbColor={"#fafafa"}
      trackColor={{
        false: "#fff",
        true: "#000",
      }}
      ios_backgroundColor={isDark ? "#000": "fff"}
      value={isDark}
      onValueChange={toggleColorScheme}
    />
  );
}

export default ThemeToggler;
