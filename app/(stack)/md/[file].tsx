import { useLocalSearchParams } from "expo-router";
import { markdown } from "@/utils/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

function MarkdownContent() {
  const { file: id } = useLocalSearchParams<{ file: string }>();

  const md = markdown.filter((file) => file.link === id)[0];

  return (
    <>
      <MarkdownRenderer content={md.content} path={`md/${id}`} />
    </>
  );
}

export default MarkdownContent;
