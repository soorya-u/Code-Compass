import { FlatList, StyleSheet } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { markdown } from "@/utils/markdown";

import MarkdownCard from "@/components/MarkdownCard";

export default function Home() {
  const { isDark } = useTheme();
  return (
    <FlatList
      data={markdown}
      renderItem={({ item }) => <MarkdownCard item={item} />}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={{ backgroundColor: isDark ? "#000" : "#fff" }}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
