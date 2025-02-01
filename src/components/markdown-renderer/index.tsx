import { forwardRef } from "react";
import { FlatList, View } from "react-native";
import { useMarkdown, useMarkdownHookOptions } from "react-native-marked";

import { CustomRenderer } from "./renderer";
import { styles, lightTheme, darkTheme } from "./styles";

import { setTheme } from "@/utils/setters";

const MarkdownRenderer = forwardRef(
  ({ content }: { content: string }, ref: any) => {
    const options: useMarkdownHookOptions = {
      colorScheme: setTheme("dark", "light"),
      renderer: new CustomRenderer(ref),
      styles,
      theme: setTheme(darkTheme, lightTheme),
    };

    const mdElements = useMarkdown(content, options);

    return (
      <FlatList
        ref={ref}
        contentInsetAdjustmentBehavior="automatic"
        data={mdElements}
        renderItem={({ item }) => item as React.ReactElement}
        ItemSeparatorComponent={() => <View className="my-3" />}
        maxToRenderPerBatch={32}
        initialNumToRender={32}
        className="min-w-full bg-primary"
        contentContainerClassName="min-w-full border-2 border-blue-500"
        onScrollToIndexFailed={() =>
          ref.current?.scrollToIndex({ animated: true, index: 0 })
        }
      />
    );
  },
);

export default MarkdownRenderer;
