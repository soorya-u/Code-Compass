import React, { useMemo, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { type FlatList, TouchableOpacity } from "react-native";

import MarkdownRenderer from "@/components/markdown-renderer";
import { markdown } from "@/constants/markdown";
import { useScreenOptions } from "@/hooks/use-screen-options";
import { MarkdownIcon } from "@/components/icons";
import { setTheme } from "@/utils/setters";

export default function MarkdownContent() {
  const flatListRef = useRef<FlatList<React.ReactNode>>(null);

  const { file: id } = useLocalSearchParams<{ file: string }>();

  const md = useMemo(
    () => markdown.filter((file) => file.route === id)[0],
    [id],
  );

  useScreenOptions({
    headerTitle: md.name,
    headerRight: ({ tintColor }) => MarkdownIcon({ tintColor, md }),
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
