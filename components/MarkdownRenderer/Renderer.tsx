import { ReactNode } from "react";
import {
  View,
  Text,
  type ViewStyle,
  type TextStyle,
  FlatList,
} from "react-native";
import { randomUUID } from "expo-crypto";
import { Renderer, type RendererInterface } from "react-native-marked";
import CodeHighlighter from "../CodeHighlighter";

class CustomRenderer extends Renderer implements RendererInterface {
  heading(
    text: string | ReactNode[],
    styles?: TextStyle | undefined
  ): ReactNode {
    return (
      <View key={randomUUID()} className="w-full justify-center">
        {!Array.isArray(text) ? (
          <Text
            style={styles}
            className="font-['Poppins'] text-black dark:text-white text-[23px] px-3 mb-1"
          >
            {text}
          </Text>
        ) : (
          <>
            {text.map((elem, idx) => (
              <Text
                style={styles}
                key={idx}
                className="font-['Poppins'] text-black dark:text-white text-[23px] px-3 mb-1"
              >
                {elem}
              </Text>
            ))}
          </>
        )}
        {styles?.fontSize && styles?.fontSize > 25 && (
          <View className="w-[95%] mx-auto self-center px-2 h-[1px] bg-[#a3acb9] dark:bg-[#3e4248] rounded-md"></View>
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
}

export const renderer = new CustomRenderer();
