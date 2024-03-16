import { FlatList, View, ScrollView } from "react-native";

import { markdown } from "@/utils/markdown";

import MarkdownTitle from "@/components/MarkdownTitle";

export default function Home() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="bg-neutral-50 dark:bg-[rgb(30_30_30)] rounded-[10px] m-4">
        <FlatList
          ItemSeparatorComponent={() => <View className="h-[0.5px] bg-stone-300 dark:bg-neutral-600 w-[85%] self-end" />}
          data={markdown}
          scrollEnabled={false}
          renderItem={({ item }) => <MarkdownTitle item={item} />}
        />
      </View>
    </ScrollView>
  );
}
