import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import { MaterialIcons } from "@expo/vector-icons";

import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { useTheme } from "@/hooks/use-theme";
import {
  extentionLanguagesMapper,
  extentionHeadingMapper,
} from "@/utils/exLangMapper";

import RNH from "./RNSyntaxHighlighter";

export default function CodeHighlighter({
  code,
  ext,
}: {
  code: string | string[];
  ext: string | undefined;
}) {
  const [showCopied, setShowCopied] = useState(false);

  const { setTheme } = useTheme();

  useEffect(() => {
    showCopied && setTimeout(() => setShowCopied(false), 2000);
  }, [showCopied]);

  return (
    <View className="justify-center w-[95%] self-center bg-[#FAFAFA] dark:bg-[#282C34] rounded-[4px]">
      <View className="w-full h-10 self-center flex-row justify-between items-center px-5 border-b border-b-[#4F5057] dark:border-b-[#9AA0AC]">
        <Text className="text-black text-base font-['Poppins'] dark:text-white">
          {extentionHeadingMapper(ext!)}
        </Text>
        <View className="relative">
          {showCopied && (
            <View className="absolute w-[110px] h-8 -top-12 -left-[70px] bg-[#FAFAFA] dark:bg-[#282C34] items-center justify-center rounded-md border border-[#4F5057] dark:border-[#9AA0AC]">
              <Text className="font-['Inder'] text-base text-black dark:text-white">
                Code Copied
              </Text>
            </View>
          )}
          <TouchableOpacity
            onPress={async () =>
              await Clipboard.setStringAsync(code.toString()).then(() =>
                setShowCopied(true)
              )
            }
          >
            <MaterialIcons
              name="content-copy"
              size={20}
              color={setTheme("white", "black")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <RNH
        language={extentionLanguagesMapper(ext!)}
        style={setTheme(oneDark, oneLight)}
        highlighter="prism"
        fontFamily="Jetbrains-Mono-Nerd"
      >
        {code}
      </RNH>
    </View>
  );
}
