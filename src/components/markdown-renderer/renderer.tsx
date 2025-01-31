import { randomUUID } from "expo-crypto";
import { ReactNode } from "react";
import {
  View,
  Text,
  type ViewStyle,
  type TextStyle,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Renderer, type RendererInterface } from "react-native-marked";

import CodeHighlighter from "../code-highlighter";
import { openLink } from "@/utils/markdown-links";

export class CustomRenderer extends Renderer implements RendererInterface {
  private flatListRef: React.RefObject<FlatList<React.ReactNode>>;

  constructor(flatListRef: React.RefObject<FlatList<React.ReactNode>>) {
    super();
    this.flatListRef = flatListRef;
  }

  heading(
    text: string | ReactNode[],
    styles?: TextStyle | undefined,
  ): ReactNode {
    const id =
      typeof text === "string" && text.toLowerCase().split(" ").join("-");
    return (
      <View
        id={id as string}
        key={randomUUID()}
        className="w-full justify-center"
      >
        <Text
          style={styles}
          className="mb-1 px-3 font-poppins text-[23px] text-black dark:text-white"
        >
          {text}
        </Text>
        {styles?.fontSize && styles?.fontSize > 25 && Platform.OS === "ios" && (
          <View className="mx-auto h-[1px] w-[95%] self-center rounded-md bg-[#a3acb9] px-2 dark:bg-[#3e4248]" />
        )}
      </View>
    );
  }

  paragraph(children: ReactNode[], styles?: ViewStyle | undefined): ReactNode {
    return (
      <View key={randomUUID()} className="px-3">
        {children.map((elem, idx) => (
          <Text
            key={idx}
            className="font-ubuntu text-black dark:text-white"
          >
            {elem}
          </Text>
        ))}
      </View>
    );
  }

  listItem(children: ReactNode[], styles?: ViewStyle | undefined): ReactNode {
    return (
      <FlatList
        key={randomUUID()}
        data={children}
        renderItem={({ item }) => (
          <View className="mr-3 w-full max-w-[320px]">{item}</View>
        )}
      />
    );
  }

  code(
    text: string,
    _language?: string | undefined,
    containerStyle?: ViewStyle | undefined,
    textStyle?: TextStyle | undefined,
  ): ReactNode {
    return <CodeHighlighter key={randomUUID()} code={text} ext={_language} />;
  }

  hr(styles?: ViewStyle | undefined): ReactNode {
    return (
      <View className="mx-auto h-1 w-[98%] rounded-md bg-[#a3acb9] dark:bg-[#33373b]" />
    );
  }

  link(
    children: string | ReactNode[],
    href: string,
    styles?: TextStyle | undefined,
  ): ReactNode {
    return (
      <TouchableOpacity
        key={randomUUID()}
        onPress={() => openLink(href, this.flatListRef)}
      >
        <Text style={styles}>{children}</Text>
      </TouchableOpacity>
    );
  }
}
