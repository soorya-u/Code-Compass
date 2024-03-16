import { FlatList, View, ScrollView } from "react-native";

import { markdown } from "@/utils/markdown";

import MarkdownTitle from "@/components/MarkdownTitle";

export default function Home() {
  return (
    <ScrollView className="" contentInsetAdjustmentBehavior="automatic">
      <View className="bg-neutral-800 rounded-[10px] m-3">
        <FlatList
          ItemSeparatorComponent={() => <View className="h-[0.5px] bg-neutral-600 w-[85%] self-end" />}
          data={markdown}
          scrollEnabled={false}
          renderItem={({ item }) => <MarkdownTitle item={item} />}
        />
      </View>
    </ScrollView>
  );
}
