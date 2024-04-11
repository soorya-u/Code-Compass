import { FlatList, View, Text } from "react-native";

import MarkdownTitle from "../MarkdownTitle";

import { techTypeHeadings } from "@/constants/markdown";
import { Markdown, TechType } from "@/types/markdown";

type MarkdownListProps =
  | {
      data: Record<TechType, Markdown[]>;
      iterativeKeys: TechType;
    }
  | {
      data: Markdown[];
    };

export default function MarkdownList(props: MarkdownListProps) {
  if ("iterativeKeys" in props)
    return (
      <View className="gap-y-2">
        <Text className="pl-5 font-['Poppins'] text-lg text-black dark:text-white">
          {techTypeHeadings[props.iterativeKeys]}
        </Text>
        <View className="m-4 rounded-[10px] bg-neutral-50 dark:bg-[rgb(30_30_30)]">
          <FlatList
            data={props.data[props.iterativeKeys]}
            renderItem={({ item }) => <MarkdownTitle item={item} />}
            ItemSeparatorComponent={() => (
              <View className="h-[0.5px] w-[85%] self-end bg-stone-300 dark:bg-neutral-600" />
            )}
            scrollEnabled={false}
          />
        </View>
      </View>
    );

  return (
    <View className="mt-6">
      {!props.data.length && (
        <Text className="pl-5 text-center font-['Poppins'] text-2xl text-black dark:text-white">
          No Records were Found
        </Text>
      )}
      <View className="m-4 rounded-[10px] bg-neutral-50 dark:bg-[rgb(30_30_30)]">
        <FlatList
          data={props.data}
          renderItem={({ item }) => <MarkdownTitle item={item} />}
          ItemSeparatorComponent={() => (
            <View className="h-[0.5px] w-[85%] self-end bg-stone-300 dark:bg-neutral-600" />
          )}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}
