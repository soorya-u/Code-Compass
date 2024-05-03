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
        src={md.uri}
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
        className="absolute bottom-10 right-10 size-12 items-center justify-center rounded-full bg-black opacity-85 dark:bg-white"
        onPress={() => {
          flatListRef.current?.scrollToIndex({
            animated: true,
            index: 0,
          });
        }}
      >
        <Ionicons
          name="caret-up"
          size={35}
          color={setTheme("black", "white")}
        />
      </TouchableOpacity>
    </>
  );
}

export default MarkdownContent;
