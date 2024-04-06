import { FlatList, View, Text } from "react-native";

import { Markdown, TechType } from "@/types/markdown";
import { techTypeHeadings } from "@/constants/markdown";

import MarkdownTitle from "../MarkdownTitle";

type MarkdownListProps = {
  iterativeKeys: TechType;
  data: Record<TechType, Markdown[]>;
};

export default function MarkdownList(props: MarkdownListProps) {
  return (
    <View className="gap-y-2">
      <Text className="pl-5 text-lg text-black font-['Poppins'] dark:text-white">
        {techTypeHeadings[props.iterativeKeys]}
      </Text>
      <View className="bg-neutral-50 dark:bg-[rgb(30_30_30)] rounded-[10px] m-4">
        <FlatList
          data={props.data[props.iterativeKeys]}
          renderItem={({ item }) => <MarkdownTitle item={item} />}
          ItemSeparatorComponent={() => (
            <View className="h-[0.5px] bg-stone-300 dark:bg-neutral-600 w-[85%] self-end" />
          )}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}
