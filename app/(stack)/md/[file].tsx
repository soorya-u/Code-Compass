import { useMemo } from "react";
import { useLocalSearchParams } from "expo-router";
import { markdown } from "@/utils/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

function MarkdownContent() {
  const { file: id } = useLocalSearchParams<{ file: string }>();
  const md = useMemo(
    () => markdown.filter((file) => file.link === id)[0],
    [id]
  );

  return (
    <>
      <MarkdownRenderer content={md.content} path={`md/${id}`} />
    </>
  );
}

export default MarkdownContent;
