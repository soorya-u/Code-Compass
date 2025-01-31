import { MaterialIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import RNH from "./syntax-highlighter";

import {
  extensionLanguagesMapper,
  extensionHeadingMapper,
} from "@/utils/extention-mapper";

import { setTheme } from "@/utils/setters";

export default function CodeHighlighter({
  code,
  ext,
}: {
  code: string;
  ext: string | undefined;
}) {
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    showCopied && setTimeout(() => setShowCopied(false), 2000);
  }, [showCopied]);

  return (
    <View className="w-[95%] justify-center self-center rounded-[4px] bg-[#FAFAFA] dark:bg-[#282C34]">
      <View className="h-10 w-full flex-row items-center justify-between self-center border-b border-b-[#4f50576d] px-5 dark:border-b-[#9aa0ac8a]">
        <View className="flex-row items-center justify-start">
          <Text className="mr-1 font-ubuntu text-2xl text-[#000000b1] dark:text-[#ffffffa8]">
            {extensionHeadingMapper(ext!)?.headingIcon}
          </Text>
          <Text className="font-poppins text-base text-[#000000b1] dark:text-[#ffffffa8]">
            {extensionHeadingMapper(ext!)?.headingName}
          </Text>
        </View>
        <View className="relative">
          {showCopied && (
            <View className="absolute -left-[70px] -top-12 h-8 w-[110px] items-center justify-center rounded-md border border-[#4F5057] bg-[#FAFAFA] opacity-75 dark:border-[#9AA0AC] dark:bg-[#282C34]">
              <Text className="font-inder text-base text-black dark:text-white">
                Code Copied
              </Text>
            </View>
          )}
          <TouchableOpacity
            onPress={async () =>
              await Clipboard.setStringAsync(code.toString()).then(() =>
                setShowCopied(true),
              )
            }
          >
            <MaterialIcons
              name="content-copy"
              size={20}
              color={setTheme("#ffffffa8", "#000000b1")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="m-0 flex-row p-0">
        <View className="w-9 items-center justify-center gap-y-[0.5px] border-r border-r-[#4f50576d] dark:border-r-[#9aa0ac8a]">
          {code.split("\n").map((_, idx) => (
            <Text
              className="text-right font-jetbrains text-[13px] text-[#3F434C] dark:text-[#A7ADB8]"
              key={idx}
            >
              {idx + 1}
            </Text>
          ))}
        </View>
        <RNH
          language={extensionLanguagesMapper(ext!)}
          style={setTheme(oneDark, oneLight)}
          highlighter="prism"
          fontFamily="Jetbrains-Mono-Nerd"
        >
          {code}
        </RNH>
      </View>
    </View>
  );
}
