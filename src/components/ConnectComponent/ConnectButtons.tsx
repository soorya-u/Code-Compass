import { Text, TouchableOpacity } from "react-native";

import { useConstantTheme } from "@/hooks/use-theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type IOptions = {
  name: string;
  icon: "user-plus" | "user-check";
  default: boolean;
};

const options: IOptions[] = [
  { name: "Login   ", icon: "user-check", default: false },
  { name: "Sign Up", icon: "user-plus", default: true },
];

export default function SignInButtons() {
  const { styles, backgroundColor, foregroundColor } = useConstantTheme();
  const router = useRouter();

  return (
    <>
      {options.map((elem, idx) => (
        <TouchableOpacity
          onPress={() => router.push("/(auth)/login")}
          key={idx}
          className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
          style={elem.default ? styles.btnBg : styles.btnOutlineBg}
        >
          <FontAwesome6
            name={elem.icon}
            color={elem.default ? backgroundColor : foregroundColor}
            size={20}
          />
          <Text
            style={elem.default ? styles.btnText : styles.btnOutlineText}
            className="text-center font-['Poppins'] text-xl"
          >
            {elem.name}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
}
