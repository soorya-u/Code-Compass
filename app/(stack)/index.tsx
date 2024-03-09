import { FlatList, StyleSheet } from "react-native";

import { usePoppinsFont } from "@/hooks/use-fonts";
import { markdown } from "@/utils/markdown";

import MarkdownCard from "@/components/MarkdownCard";
import FlatListHeader from "@/components/FlatListHeader";

export default function Home() {
  const { onLayout } = usePoppinsFont();
  return (
    <FlatList
      onLayout={onLayout}
      data={markdown}
      renderItem={({ item }) => <MarkdownCard item={item} />}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainerStyle: {
    backgroundColor: "#000",
  },
});
