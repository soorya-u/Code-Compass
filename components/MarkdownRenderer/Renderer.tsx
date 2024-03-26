import { ReactNode } from "react";
import {
  View,
  Text,
  type ViewStyle,
  type TextStyle,
  FlatList,
  Platform,
  TouchableOpacity,
  Linking,
} from "react-native";
import { randomUUID } from "expo-crypto";
import { Renderer, type RendererInterface } from "react-native-marked";
import CodeHighlighter from "../CodeHighlighter";

export class CustomRenderer extends Renderer implements RendererInterface {
  private flatListRef: React.RefObject<FlatList<React.ReactNode>>;

  constructor(flatListRef: React.RefObject<FlatList<React.ReactNode>>) {
    super();
    this.flatListRef = flatListRef;
  }

  heading(
    text: string | ReactNode[],
    styles?: TextStyle | undefined
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
          className="font-['Poppins'] text-black dark:text-white text-[23px] px-3 mb-1"
        >
          {text}
        </Text>
        {styles?.fontSize && styles?.fontSize > 25 && Platform.OS === "ios" && (
          <View className="w-[95%] mx-auto self-center px-2 h-[1px] bg-[#a3acb9] dark:bg-[#3e4248] rounded-md" />
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
            className="font-['Ubuntu-Nerd'] text-black dark:text-white"
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
    textStyle?: TextStyle | undefined
  ): ReactNode {
    return (
      <CodeHighlighter key={randomUUID()} code={text} language={_language} />
    );
  }

  hr(styles?: ViewStyle | undefined): ReactNode {
    return (
      <View className="w-[98%] mx-auto h-1 bg-[#a3acb9] dark:bg-[#33373b] rounded-md"></View>
    );
  }

  link(
    children: string | ReactNode[],
    href: string,
    styles?: TextStyle | undefined
  ): ReactNode {
    const relativeLink = href.startsWith("/#") && href.replace("/#", "");
    return (
      <TouchableOpacity
        key={randomUUID()}
        onPress={() => {
          if (relativeLink) {
            const flatListData =
              this.flatListRef.current && this.flatListRef.current.props.data;
            const actualData = flatListData && Array.from(flatListData);
            const item = actualData?.find((node) => {
              const elem = node as React.ReactElement;
              const { id }: { id: string | undefined } = elem.props;
              if (id === relativeLink) return node;
            });
            this.flatListRef.current?.scrollToItem({
              animated: true,
              item,
              viewOffset: Platform.OS === "ios" ? 75 : 0,
            });
          } else {
            Linking.openURL(href);
          }
        }}
      >
        <Text style={styles}>{children}</Text>
      </TouchableOpacity>
    );
  }
}
