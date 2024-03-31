// import { useState } from "react";
import {
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  // type NativeSyntheticEvent,
  // type TextInputFocusEventData,
  // Platform,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { markdown } from "@/constants/markdown";
import { useTheme } from "@/hooks/use-theme";
import { useScreenOptions } from "@/hooks/use-screen-options";

import MarkdownTitle from "@/components/MarkdownTitle";

const HeaderIcon = ({ tintColor }: { tintColor: string | undefined }) => (
  <Link href={"/(stack)/settings"} asChild>
    <TouchableOpacity>
      <Ionicons name="cog" size={30} color={tintColor} />
    </TouchableOpacity>
  </Link>
);

export default function Home() {
  // const [search, setSearch] = useState("");
  const { setTheme } = useTheme();

  useScreenOptions({
    headerTitle: "Home",
    headerSearchBarOptions: {
      placeholder: "Search",
      barTintColor: setTheme("rgb(20 20 20)", "rgb(248 250 252)"),
      textColor: setTheme("rgb(229 231 235)", "rgb(10 10 10)"),
      // TODO
      // headerIconColor:
      // onChangeText: (e: NativeSyntheticEvent<TextInputFocusEventData>) =>
      //   setSearch(e.nativeEvent.text),
    },
    headerRight: ({ tintColor }) => <HeaderIcon tintColor={tintColor} />,
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
