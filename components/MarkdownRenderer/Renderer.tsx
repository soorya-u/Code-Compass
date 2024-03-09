import { Children, ReactNode } from "react";
import { View, Text, type ViewStyle, type TextStyle } from "react-native";
import { Renderer, type RendererInterface } from "react-native-marked";
import CodeHighlighter from "../CodeHighlighter";

class CustomRenderer extends Renderer implements RendererInterface {
  code(
    text: string,
    _language?: string | undefined,
    containerStyle?: ViewStyle | undefined,
    textStyle?: TextStyle | undefined
  ): ReactNode {
    return <CodeHighlighter code={text} language={_language} />;
  }
}

export const renderer = new CustomRenderer();
