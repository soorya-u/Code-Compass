import CodeHighlighter from "react-native-code-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeHighligher({
  code,
  language,
}: {
  code: string | string[];
  language: string;
}) {
  return (
    <>
      <CodeHighlighter
        hljsStyle={atomOneDarkReasonable}
        language={language}
        scrollViewProps={{
          contentContainerStyle: {
            paddingHorizontal: 10,
          },
        }}
      >
        {code}
      </CodeHighlighter>
    </>
  );
}

export default CodeHighligher;
