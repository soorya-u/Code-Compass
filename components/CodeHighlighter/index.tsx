import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import RNCodeHighlighter from "react-native-code-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeHighlighter({
  code,
  language,
}: {
  code: string | string[];
  language: string | undefined;
}) {
  useFonts({
    "Jetbrains-Mono-Nerd": require("@/assets/fonts/JetBrainsMonoNerdFont-Medium.ttf"),
  });

  return (
    <>
      <RNCodeHighlighter
        textStyle={styles.text}
        codeTagProps={{
          style: styles.codeTag,
        }}
        hljsStyle={atomOneDark}
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
  text: {
    fontFamily: "Jetbrains-Mono-Nerd",
  },
  codeTag: {
    backgroundColor: "#282C34",
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
