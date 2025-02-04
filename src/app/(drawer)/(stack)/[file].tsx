import { Fragment, useMemo, useRef } from "react";
import { type FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { useScreenOptions } from "@/hooks/use-screen-options";
import { useTheme } from "@/hooks/use-theme";

import { markdown } from "@/constants/markdown";

import MarkdownRenderer from "@/components/markdown-renderer";
import { MarkdownIcon } from "@/components/icons";

export default function MarkdownContent() {
  const flatListRef = useRef<FlatList<React.ReactNode>>(null);

  const { file: id } = useLocalSearchParams<{ file: string }>();

  const md = useMemo(
    () => markdown.filter((file) => file.route === id)[0],
    [id],
  );

  const { setTheme } = useTheme();

  useScreenOptions({
    headerTitle: md.name,
    headerRight: ({ tintColor }) => MarkdownIcon({ tintColor, md }),
  });

  return (
    <Fragment>
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
    </Fragment>
  );
}
