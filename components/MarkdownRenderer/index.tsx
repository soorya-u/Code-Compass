import { ColorSchemeName, FlatList } from "react-native";
import { useMarkdown, useMarkdownHookOptions } from "react-native-marked";

import { useTheme } from "@/hooks/use-theme";
import { randomUUID } from "crypto";

import { renderer } from "./Renderer";
import { styles, theme } from "./styles";
import { ReactElement, memo } from "react";

function MarkdownRenderer({
  content,
  path,
}: {
  content: string;
  path: string;
}) {
  const { setTheme } = useTheme();

  const options: useMarkdownHookOptions = {
    colorScheme: setTheme("dark", "light") as ColorSchemeName,
    renderer: renderer,
    styles: styles,
    theme: theme,
    baseUrl: path,
  };

  const mdElements = useMarkdown(content, options);

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={mdElements}
      renderItem={({ item }) => item as ReactElement}
      maxToRenderPerBatch={8}
      initialNumToRender={8}
      keyExtractor={(_, idx) => idx.toString()}
      style={{
        backgroundColor: setTheme("black", "white"),
      }}
    />
  );
}

export default memo(MarkdownRenderer);
