import { StyleSheet } from "react-native";
import RNH from "./RNSyntaxHighlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { useTheme } from "@/hooks/use-theme";
import { extentionLanguagesMapper } from "@/utils/exLangMapper";

export default function CodeHighlighter({
  code,
  ext,
}: {
  code: string | string[];
  ext: string | undefined;
}) {
  const { setTheme } = useTheme();

  return (
    <RNH
      language={extentionLanguagesMapper(ext ?? "")}
      style={setTheme(oneDark, oneLight)}
      highlighter="prism"
      fontFamily="Jetbrains-Mono-Nerd"
    >
      {code}
    </RNH>
  );
}
