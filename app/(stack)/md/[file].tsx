import { useMemo, useRef } from "react";
import { type FlatList, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { markdown } from "@/constants/markdown";
import { useTheme } from "@/hooks/use-theme";
import { useScreenOptions } from "@/hooks/use-screen-options";
import { Markdown } from "@/types/markdown";

import MarkdownRenderer from "@/components/MarkdownRenderer";

function HeaderIcon({
  tintColor,
  md,
}: {
  tintColor: string | undefined;
  md: Markdown;
}) {
  return (
    <TouchableOpacity>
      <Image
        className="w-[30px] h-[30px]"
        source={md.img}
        style={
          md.canInvert && {
            tintColor,
          }
        }
        alt={md.name}
      />
    </TouchableOpacity>
  );
}

function MarkdownContent() {
  const { setTheme } = useTheme();

  const flatListRef = useRef<FlatList<React.ReactNode>>(null);

  const { file: id } = useLocalSearchParams<{ file: string }>();

  const md = useMemo(
    () => markdown.filter((file) => file.link === id)[0],
    [id]
  );

  useScreenOptions({
    headerTitle: md.name,
    headerRight: ({ tintColor }) => HeaderIcon({ tintColor, md }),
  });

  return (
    <>
      <MarkdownRenderer content={md.content} ref={flatListRef} />
      <TouchableOpacity
        className="border-[#a3acb9] dark:border-[#3e4248] bg-[#ffffffd7] dark:bg-[#000000cf] border h-12 w-12 absolute right-5 bottom-5 justify-center items-center rounded-full"
        onPress={() => {
          flatListRef.current?.scrollToIndex({
            animated: true,
            index: 0,
          });
        }}
      >
        <Ionicons
          name="chevron-up-outline"
          size={35}
          color={setTheme("white", "black")}
        />
      </TouchableOpacity>
    </>
  );
}

export default MarkdownContent;
