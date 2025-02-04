import { useEffect, useMemo, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

import MarkdownList from "@/components/markdown-list";
import { markdown } from "@/constants/markdown";
import { useScreenOptions } from "@/hooks/use-screen-options";
import { Markdown } from "@/types/markdown";
import { markdownSorter, markdownSearcher } from "@/utils/markdown-helpers";
import { useTheme } from "@/hooks/use-theme";

export default function BrowseScreen() {
  const [searchText, setSearchText] = useState("");

  const [filteredList, setFilteredList] = useState<Markdown[]>([]);

  const { theme } = useTheme();

  useEffect(() => {
    if (searchText) {
      setFilteredList(markdownSearcher(markdown, searchText));
    }
  }, [searchText]);

  useScreenOptions({
    headerSearchBarOptions: {
      textColor: theme.secondary,
      headerIconColor: theme.secondary,
      tintColor: theme.secondary,
      hintTextColor: theme.secondary,
      placeholder: "Search",
      onChangeText: (e) => setSearchText(e.nativeEvent.text),
    },
  });

  const { sortedMd, keys } = useMemo(
    () => markdownSorter(markdown),
    [markdown],
  );

  return !searchText ? (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={keys}
      renderItem={({ item }) => (
        <MarkdownList data={sortedMd} iterativeKeys={item} />
      )}
      ListHeaderComponent={() => <View className="h-4" />}
      ListFooterComponent={() => <View className="h-4" />}
      ItemSeparatorComponent={() => <View className="h-4" />}
    />
  ) : (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <MarkdownList data={filteredList} />
    </ScrollView>
  );
}
