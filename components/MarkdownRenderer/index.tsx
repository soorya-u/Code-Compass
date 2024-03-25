import { FlatList, View } from "react-native";
import { useMarkdown, useMarkdownHookOptions } from "react-native-marked";

import { useTheme } from "@/hooks/use-theme";

import { renderer } from "./Renderer";
import { styles, lightTheme, darkTheme } from "./styles";

function MarkdownRenderer({ content }: { content: string }) {
  const { setTheme } = useTheme();

  const options: useMarkdownHookOptions = {
    colorScheme: setTheme("dark", "light"),
    renderer: renderer,
    styles: styles,
    theme: setTheme(darkTheme, lightTheme),
  };

  const mdElements = useMarkdown(content, options);

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={mdElements}
      renderItem={({ item }) => item as React.ReactElement}
      ItemSeparatorComponent={() => <View className="my-3" />}
      maxToRenderPerBatch={16}
      initialNumToRender={16}
      style={{
        backgroundColor: setTheme("rgb(10 10 10)", "rgb(229 231 235)"),
      }}
    />
  );
}

export default MarkdownRenderer;
