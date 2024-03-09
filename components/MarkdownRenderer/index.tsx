import Markdown from "react-native-marked";

import { renderer } from "./Renderer";
import { styles, theme } from "./styles";

function MarkdownRenderer({
  content,
  path,
}: {
  content: string;
  path: string;
}) {
  return (
    <Markdown
      theme={theme}
      baseUrl={path}
      value={content}
      renderer={renderer}
      styles={styles}
    />
  );
}

export default MarkdownRenderer;
