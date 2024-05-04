import { Text, TouchableOpacity } from "react-native";

import { signIn } from "@/supabase/auth/sign-in";
import { useConstantTheme } from "@/hooks/use-theme";
import { IProviders } from "@/types/auth";
import { FontAwesome } from "@expo/vector-icons";

const providers = ["Google", "Github"];

export default function SignInButtons() {
  const { styles, backgroundColor } = useConstantTheme();

  return (
    <>
      {providers.map((elem, idx) => (
        <TouchableOpacity
          onPress={async () => await signIn(elem.toLowerCase() as IProviders)}
          key={idx}
          className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
          style={styles.btnBg}
        >
          <FontAwesome
            name={elem.toLowerCase() as IProviders}
            color={backgroundColor}
            size={25}
          />
          <Text
            style={styles.btnText}
            className="text-center font-['Poppins'] text-xl"
          >
            Login with {elem}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
}
