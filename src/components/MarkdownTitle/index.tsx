import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

import { useTheme } from "@/hooks/use-theme";
import { Markdown } from "@/types/markdown";

function MarkdownTitle({ item }: { item: Markdown }) {
  const { setTheme } = useTheme();

  return (
    <Link
      href={{
        pathname: "/[file]",
        params: { file: item.route },
      }}
      asChild
    >
      <TouchableOpacity className="rounded-[10px] bg-neutral-50 dark:bg-[rgb(30_30_30)]">
        <View className="flex-row items-center gap-[10] p-[10]">
          <Animated.Image
            className="size-[35px]"
            src={item.uri}
            style={
              item.canInvert && {
                tintColor: setTheme("white", "black"),
              }
            }
            alt={item.name}
            sharedTransitionTag={item.name}
          />
          <Text className="flex-1 pl-1 font-['Inder'] text-[16px] text-black dark:text-white">
            {item.name}
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={setTheme("rgb(82 82 82)", "rgb(214 211 209)")}
          />
        </View>
      </TouchableOpacity>
    </Link>
  );
}

export default MarkdownTitle;
