import { Switch } from "react-native";
import { useTheme } from "@/hooks/use-theme";

function About() {
  const { isDark, toggleColorScheme } = useTheme();
  return <Switch value={isDark} onValueChange={toggleColorScheme} />;
}

export default About;
