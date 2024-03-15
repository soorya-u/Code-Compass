import { ColorSchemeName, FlatList, View } from "react-native";
import { useMarkdown, useMarkdownHookOptions } from "react-native-marked";

import { useTheme } from "@/hooks/use-theme";
import { getRandomBytes } from "expo-crypto";

import { renderer } from "./Renderer";
import { styles, lightTheme, darkTheme } from "./styles";
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
    theme: setTheme(darkTheme, lightTheme),
    baseUrl: path,
  };

  const mdElements = useMarkdown(content, options);

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={mdElements}
      renderItem={({ item }) => item as ReactElement}
      ItemSeparatorComponent={() => <View className="my-3" />}
      maxToRenderPerBatch={8}
      initialNumToRender={8}
      keyExtractor={(_, idx) => `${getRandomBytes(2)}, ${idx}`}
      style={{
        backgroundColor: setTheme("black", "white"),
      }}
    />
  );
}

export default memo(MarkdownRenderer);
