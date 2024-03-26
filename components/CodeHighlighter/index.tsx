import { StyleSheet } from "react-native";
import RNH from "./RNSyntaxHighlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { useTheme } from "@/hooks/use-theme";

export default function CodeHighlighter({
  code,
  language,
}: {
  code: string | string[];
  language: string | undefined;
}) {
  const { setTheme } = useTheme();

  return (
    <RNH
      language={language}
      style={setTheme(oneDark, oneLight)}
      highlighter="prism"
      fontFamily="Jetbrains-Mono-Nerd"
    >
      {code}
    </RNH>
  );
}