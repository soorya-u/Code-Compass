import { StyleSheet, View } from "react-native";
import { useTheme } from "@/hooks/use-theme";

import RNCodeHighlighter from "react-native-code-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeHighlighter({
  code,
  language,
}: {
  code: string | string[];
  language: string | undefined;
}) {
  const { isDark } = useTheme();

  return (
    <>
      <RNCodeHighlighter
        customStyle={{
          backgroundColor: isDark ? "black" : "white",
        }}
        textStyle={{ fontFamily: "Jetbrains-Mono-Nerd" }}
        codeTagProps={{
          style: {
            ...styles.codeTag,
            backgroundColor: isDark ? "#282C34" : "#FAFAFA",
          },
        }}
        hljsStyle={isDark ? atomOneDark : atomOneLight}
        language={language}
        scrollViewProps={{
          contentContainerStyle: styles.container,
        }}
      >
        {code}
      </RNCodeHighlighter>
    </>
  );
}

const styles = StyleSheet.create({
  codeTag: {
    width: "92%",
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
  },
  container: {
    paddingHorizontal: 15,
  },
});
