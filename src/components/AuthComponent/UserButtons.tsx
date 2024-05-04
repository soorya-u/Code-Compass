import { Image, Text, TouchableOpacity } from "react-native";

import { useConstantTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SignOut } from "@/supabase/auth/sign-out";

type UserButtonProps = {
  name: string;
  image: string;
};

export default function UserButtons({ name, image }: UserButtonProps) {
  const { styles, backgroundColor } = useConstantTheme();

  return (
    <>
      <Link href="/(drawer)/(stack)/(tabs)/browse" asChild>
        <TouchableOpacity
          className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
          style={styles.btnBg}
        >
          <Image
            src={image}
            style={{ borderColor: backgroundColor }}
            className="aspect-square size-[30px] rounded-full border"
          />
          <Text
            style={styles.btnText}
            className="text-center font-['Poppins'] text-xl"
          >
            Contiue as {name}
          </Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        onPress={async () => await SignOut()}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
        style={styles.btnBg}
      >
        <Text
          style={styles.btnText}
          className="text-center font-['Poppins'] text-xl"
        >
          Logout
        </Text>
        <Ionicons name="log-out-outline" color={backgroundColor} size={25} />
      </TouchableOpacity>
    </>
  );
}
