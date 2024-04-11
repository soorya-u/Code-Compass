import { forwardRef } from "react";
import { FlatList, View } from "react-native";
import { useMarkdown, useMarkdownHookOptions } from "react-native-marked";

import { CustomRenderer } from "./Renderer";
import { styles, lightTheme, darkTheme } from "./styles";

import { useTheme } from "@/hooks/use-theme";

const MarkdownRenderer = forwardRef(function MarkdownRenderer(
  { content }: { content: string },
  ref: any,
) {
  const { setTheme } = useTheme();

  const options: useMarkdownHookOptions = {
    colorScheme: setTheme("dark", "light"),
    renderer: new CustomRenderer(ref),
    styles,
    theme: setTheme(darkTheme, lightTheme),
  };

  const mdElements = useMarkdown(content, options);

  return (
    <>
      <FlatList
        ref={ref}
        contentInsetAdjustmentBehavior="automatic"
        data={mdElements}
        renderItem={({ item }) => item as React.ReactElement}
        ItemSeparatorComponent={() => <View className="my-3" />}
        maxToRenderPerBatch={32}
        initialNumToRender={32}
        style={{
          backgroundColor: setTheme("rgb(10 10 10)", "rgb(229 231 235)"),
        }}
        onScrollToIndexFailed={() => {
          ref.current?.scrollToIndex({
            animated: true,
            index: 0,
          });
        }}
      />
    </>
  );
});

export default MarkdownRenderer;
