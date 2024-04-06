// import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { useScreenOptions } from "@/hooks/use-screen-options";
import { useConstantTheme } from "@/hooks/use-theme";
import { markdown } from "@/constants/markdown";
import { markdownSorter } from "@/utils/markdownSorter";
import MarkdownList from "@/components/MarkdownList";

export const HeaderIcon = ({
  tintColor,
}: {
  tintColor: string | undefined;
}) => (
  <Link href={"/(stack)/settings"} asChild>
    <TouchableOpacity>
      <Ionicons name="cog" size={30} color={tintColor} />
    </TouchableOpacity>
  </Link>
);

export default function Home() {
  const { foregroundColor } = useConstantTheme();
  // const [search, setSearch] = useState("");
  useScreenOptions({
    headerSearchBarOptions: {
      textColor: foregroundColor,
      headerIconColor: foregroundColor,
      tintColor: foregroundColor,
      hintTextColor: foregroundColor,
      placeholder: "Search",
      // TODO
      // onChangeText: (e) =>
      //   setSearch(e.nativeEvent.text),
    },
  });

  const { sortedMd, keys } = markdownSorter(markdown);

  return (
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
  );
}
