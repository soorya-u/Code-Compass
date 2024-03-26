import {
  Text,
  ScrollView,
  Platform,
  StyleProp,
  TextStyle,
  View,
} from "react-native";
import "@/prism-config";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighterPrism } from "react-syntax-highlighter";
import { defaultStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { gradientDark as prismDefaultStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { StyleObject, HighlighterType } from "@/types/syntax-highlighter";

const styleCache = new Map<
  StyleObject,
  { transformedStyle: any; defaultColor: string }
>();

const topLevelPropertiesToRemove = [
  "color",
  "textShadow",
  "textAlign",
  "whiteSpace",
  "wordSpacing",
  "wordBreak",
  "wordWrap",
  "lineHeight",
  "MozTabSize",
  "OTabSize",
  "tabSize",
  "WebkitHyphens",
  "MozHyphens",
  "msHyphens",
  "hyphens",
  "fontFamily",
];

function createStyleObject(
  classNames: string[],
  elementStyle = {},
  stylesheet: any
) {
  return classNames.reduce((styleObject: any, className: string) => {
    return { ...styleObject, ...stylesheet[className] };
  }, elementStyle);
}

function generateNewStylesheet({
  stylesheet,
  highlighter,
}: {
  stylesheet: StyleObject;
  highlighter: HighlighterType;
}) {
  if (styleCache.has(stylesheet)) {
    return styleCache.get(stylesheet);
  }

  stylesheet = Array.isArray(stylesheet) ? stylesheet[0] : stylesheet;

  const transformedStyle = Object.entries(stylesheet).reduce(
    (newStylesheet, [className, style]) => {
      // @ts-ignore
      newStylesheet[className] = Object.entries(style).reduce(
        (newStyle, [key, value]) => {
          if (key === "overflowX" || key === "overflow")
            // @ts-ignore
            newStyle.overflow = value === "auto" ? "scroll" : value;
          // @ts-ignore
          else if (value.includes("em")) {
            const [num] = value.split("em");
            // @ts-ignoreView
            newStyle[key] = Number(num) * 16;
            // @ts-ignore
          } else if (key === "background") newStyle.backgroundColor = value;
          else if (key === "display") return newStyle;
          // @ts-ignore
          else newStyle[key] = value;

          return newStyle;
        },
        {}
      );
      return newStylesheet;
    },
    {}
  );
  const topLevel =
    highlighter === "prism"
      ? // @ts-ignore
        transformedStyle['pre[class*="language-"]']
      : // @ts-ignore
        transformedStyle.hljs;
  const defaultColor: string = (topLevel && topLevel.color) || "#000";
  topLevelPropertiesToRemove.forEach((property) => {
    if (topLevel[property]) {
      delete topLevel[property];
    }
  });
  if (topLevel.backgroundColor === "none") {
    delete topLevel.backgroundColor;
  }
  // @ts-ignore
  const codeLevel = transformedStyle['code[class*="language-"]'];
  if (highlighter === "prism" && !!codeLevel) {
    topLevelPropertiesToRemove.forEach((property) => {
      if (codeLevel[property]) {
        delete codeLevel[property];
      }
    });
    if (codeLevel.backgroundColor === "none") {
      delete codeLevel.backgroundColor;
    }
  }
  styleCache.set(stylesheet, { transformedStyle, defaultColor });
  return { transformedStyle, defaultColor };
}

function createChildren({
  stylesheet,
  fontSize,
  fontFamily,
}: {
  stylesheet: any;
  fontSize: number;
  fontFamily: string;
}) {
  let childrenCount = 0;
  return (children: any, defaultColor: string) => {
    childrenCount += 1;
    return children.map((child: any, i: number) =>
      createNativeElement({
        node: child,
        stylesheet,
        key: `code-segment-${childrenCount}-${i}`,
        defaultColor,
        fontSize,
        fontFamily,
      })
    );
  };
}

function createNativeElement({
  node,
  stylesheet,
  key,
  defaultColor,
  fontFamily,
  fontSize = 12,
}: {
  node: any;
  stylesheet: any;
  key: string;
  defaultColor: string;
  fontFamily: string;
  fontSize: number;
}) {
  const { properties, type, tagName: TagName, value } = node;
  const startingStyle: StyleProp<TextStyle> = {
    fontFamily,
    fontSize,
    height: fontSize + 5,
  };
  if (type === "text") {
    return (
      <Text
        key={key}
        style={Object.assign({ color: defaultColor }, startingStyle)}
      >
        {value}
      </Text>
    );
  } else if (TagName) {
    const childrenCreator = createChildren({
      stylesheet,
      fontSize,
      fontFamily,
    });
    const style = createStyleObject(
      properties.className,
      Object.assign({ color: defaultColor }, properties.style, startingStyle),
      stylesheet
    );
    const children = childrenCreator(
      node.children,
      style.color || defaultColor
    );
    return (
      <Text key={key} style={style}>
        {children}
      </Text>
    );
  }
}

function nativeRenderer({
  defaultColor,
  fontFamily,
  fontSize,
}: {
  defaultColor: string;
  fontFamily: string;
  fontSize: number;
}) {
  return ({ rows, stylesheet }: any) =>
    rows.map((node: any, i: number) =>
      createNativeElement({
        node,
        stylesheet,
        key: `code-segment-${i}`,
        defaultColor,
        fontFamily,
        fontSize,
      })
    );
}

function NativeSyntaxHighlighter({
  fontFamily,
  fontSize,
  children,
  highlighter = "highlightjs",
  language,
  style = highlighter === "prism" ? prismDefaultStyle : defaultStyle,
  ...rest
}: {
  fontFamily: string;
  fontSize: number;
  children: any;
  highlighter: HighlighterType;
  style?: StyleObject;
  language: string | undefined;
}) {
  // @ts-ignore
  const { transformedStyle, defaultColor } = generateNewStylesheet({
    stylesheet: style,
    highlighter,
  });
  const Highlighter =
    highlighter === "prism" ? SyntaxHighlighterPrism : SyntaxHighlighter;
  return (
    <Highlighter
      language={language}
      style={transformedStyle}
      horizontal={true}
      codeTagProps={{
        style: {
          paddingRight: 20,
        },
      }}
      renderer={nativeRenderer({
        defaultColor,
        fontFamily,
        fontSize,
      })}
      {...rest}
    >
      {children}
    </Highlighter>
  );
}

NativeSyntaxHighlighter.defaultProps = {
  fontFamily: "Jetbrains-Mono-Nerd",
  fontSize: 12,
  PreTag: ScrollView,
  CodeTag: View,
};

export default NativeSyntaxHighlighter;
