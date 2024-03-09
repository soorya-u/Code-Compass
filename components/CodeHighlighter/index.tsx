import { StyleSheet } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { useJetBrainsNerdFont } from "@/hooks/use-fonts";

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
  const jetBrainsNerd = useJetBrainsNerdFont();
  const { isDark } = useTheme();

  return (
    <>
      <RNCodeHighlighter
        textStyle={{ fontFamily: jetBrainsNerd }}
        codeTagProps={{
          style: {
            ...styles.codeTag,
            backgroundColor: isDark ? "#282C34" : "#FAFAFA",
          },
        }}
        hljsStyle={isDark ? atomOneDark : atomOneLight}
        language={language}
        scrollViewProps={{
          style: styles.scrollView,
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
    width: "95%",
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
  scrollView: {
    borderRadius: 5,
  },
});
