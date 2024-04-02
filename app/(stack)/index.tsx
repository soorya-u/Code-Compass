// import { useState } from "react";
import { FlatList, View, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { markdown } from "@/constants/markdown";
import { useScreenOptions } from "@/hooks/use-screen-options";
import { useConstantTheme } from "@/hooks/use-theme";

import MarkdownTitle from "@/components/MarkdownTitle";

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

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="bg-neutral-50 dark:bg-[rgb(30_30_30)] rounded-[10px] m-4">
        <FlatList
          ItemSeparatorComponent={() => (
            <View className="h-[0.5px] bg-stone-300 dark:bg-neutral-600 w-[85%] self-end" />
          )}
          data={markdown}
          scrollEnabled={false}
          renderItem={({ item }) => <MarkdownTitle item={item} />}
        />
      </View>
    </ScrollView>
  );
}
