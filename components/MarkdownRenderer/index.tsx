import { useMarkdown, useMarkdownHookOptions } from "react-native-marked";

import { useTheme } from "@/hooks/use-theme";

import { renderer } from "./Renderer";
import { styles, theme } from "./styles";
import { FlatList } from "react-native";
import { ReactElement, memo } from "react";

function MarkdownRenderer({
  content,
  path,
}: {
  content: string;
  path: string;
}) {
  const { isDark } = useTheme();

  const options: useMarkdownHookOptions = {
    colorScheme: isDark ? "dark" : "light",
    renderer: renderer,
    styles: styles,
    theme: theme,
    baseUrl: path,
  };

  const mdElements = useMarkdown(content, options);

  return (
    <FlatList
      data={mdElements}
      renderItem={({ item }) => item as ReactElement}
      maxToRenderPerBatch={8}
      initialNumToRender={8}
      keyExtractor={(_, idx) => idx.toString()}
      style={{
        backgroundColor: isDark ? "#000" : "#fff",
      }}
    />
  );
}

export default memo(MarkdownRenderer);
