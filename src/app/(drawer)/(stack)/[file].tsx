import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useRef } from "react";
import { type FlatList, TouchableOpacity, Image } from "react-native";

import MarkdownRenderer from "@/components/MarkdownRenderer";
import { markdown } from "@/constants/markdown";
import { useScreenOptions } from "@/hooks/use-screen-options";
import { useTheme } from "@/hooks/use-theme";
import { Markdown } from "@/types/markdown";

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
        className="size-[30px]"
        source={{ uri: md.uri }}
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
    () => markdown.filter((file) => file.route === id)[0],
    [id],
  );

  useScreenOptions({
    headerTitle: md.name,
    headerRight: ({ tintColor }) => HeaderIcon({ tintColor, md }),
  });

  return (
    <>
      <MarkdownRenderer content={md.content} ref={flatListRef} />
      <TouchableOpacity
        className="absolute bottom-5 right-5 h-12 w-12 items-center justify-center rounded-full border border-[#a3acb9] bg-[#ffffffd7] dark:border-[#3e4248] dark:bg-[#000000cf]"
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
