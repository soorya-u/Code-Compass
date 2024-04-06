import { Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Markdown } from "@/types/markdown";

function MarkdownTitle({ item }: { item: Markdown }) {
  const { setTheme } = useTheme();
  const { push } = useRouter();

  return (
    <TouchableOpacity
      className="bg-neutral-50 dark:bg-[rgb(30_30_30)] rounded-[10px]"
      // @ts-ignore Experimental Static Links
      onPress={() => push(`md/${item.link}`)}
    >
      <View className="flex-row items-center p-[10] gap-[10]">
        <Image
          className="w-[35px] h-[35px]"
          source={item.img}
          style={
            item.canInvert && {
              tintColor: setTheme("white", "black"),
            }
          }
          alt={item.name}
        />
        <Text className="text-base pl-1 flex-1 text-black dark:text-white font-['Inder']">
          {item.name}
        </Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={setTheme("rgb(82 82 82)", "rgb(214 211 209)")}
        />
      </View>
    </TouchableOpacity>
  );
}

export default MarkdownTitle;
