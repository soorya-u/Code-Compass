import { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

import MarkdownList from "@/components/MarkdownList";
import { markdown } from "@/constants/markdown";
import { useScreenOptions } from "@/hooks/use-screen-options";
import { useConstantTheme } from "@/hooks/use-theme";
import { Markdown } from "@/types/markdown";
import {
  markdownSorter,
  markdownSearcher,
} from "@/utils/markdownSorterAndSearcher";

export default function BrowseScreen() {
  const { foregroundColor } = useConstantTheme();
  const [searchText, setSearchText] = useState("");

  const [filteredList, setFilteredList] = useState<Markdown[]>([]);

  useEffect(() => {
    if (searchText) {
      setFilteredList(markdownSearcher(markdown, searchText));
    }
  }, [searchText]);

  useScreenOptions({
    headerSearchBarOptions: {
      textColor: foregroundColor,
      headerIconColor: foregroundColor,
      tintColor: foregroundColor,
      hintTextColor: foregroundColor,
      placeholder: "Search",
      onChangeText: (e) => setSearchText(e.nativeEvent.text),
    },
  });

  const { sortedMd, keys } = markdownSorter(markdown);

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
