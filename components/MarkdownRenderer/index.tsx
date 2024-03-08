import Markdown from "react-native-marked";

function MarkdownRenderer({ content }: { content: string }) {
  return <Markdown baseUrl="" value={content} />;
}

export default MarkdownRenderer;
