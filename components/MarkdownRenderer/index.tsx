import { ColorSchemeName, FlatList, View } from "react-native";
import { useMarkdown, useMarkdownHookOptions } from "react-native-marked";

import { useTheme } from "@/hooks/use-theme";
import { getRandomBytes } from "expo-crypto";

import { renderer } from "./Renderer";
import { styles, lightTheme, darkTheme } from "./styles";
import { ReactElement, memo, Fragment } from "react";

const generateUniqueId = (() => {
  let id = 0;
  return () => {
    return id++;
  };
})();

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
      renderItem={({ item }) => <Fragment>{item}</Fragment>}
      ItemSeparatorComponent={({}) => (
        <View key={`${Math.random()}`} className="my-3" />
      )}
      maxToRenderPerBatch={16}
      initialNumToRender={16}
      keyExtractor={() => `${Math.random()}`}
      style={{
        backgroundColor: setTheme("rgb(10 10 10)", "rgb(229 231 235)"),
      }}
    />
  );
}

export default memo(MarkdownRenderer);
