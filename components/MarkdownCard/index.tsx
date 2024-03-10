import { Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/use-theme";

type ItemProp = {
  name: string;
  content: string;
  img: any;
  link: string;
  canInvert?: boolean;
};

function MarkdownCard({ item }: { item: ItemProp }) {
  const { isDark } = useTheme();
  const { push } = useRouter();

  return (
    <TouchableOpacity
      className="aspect-square m-3 p-4 bg-[#f1f1f1] dark:bg-[#1b1b1b] shadow-sm shadow-neutral-500 dark:shadow-neutral-400 w-[40%] flex-col justify-center items-center rounded-xl"
      // @ts-ignore Experimental Static Links
      onPress={() => push(`md/${item.link}`)}
    >
      <View className="aspect-square w-full flex-col justify-center items-center rounded-xl divide-y-8">
        <Image
          className="w-1/2 h-1/2"
          source={item.img}
          style={
            item.canInvert && {
              tintColor: isDark ? "#fff" : "#000",
            }
          }
        />
        <Text className="font-['Poppins'] text-lg text-black dark:text-white text-center">
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default MarkdownCard;
