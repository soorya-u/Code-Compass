import { Fragment } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { signOut } from "@/supabase/auth/sign-out";

import { theme } from "@/constants/theme";

type UserButtonProps = {
  name: string;
  image: string;
  afterSignOut: () => void;
};

export default function UserButtons({
  afterSignOut,
  name,
  image,
}: UserButtonProps) {
  return (
    <Fragment>
      <TouchableOpacity
        onPress={async () => await signOut().then(afterSignOut)}
        className="bg-secondary w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
      >
        <Text className="text-primary text-center font-['Poppins'] text-xl">
          Logout
        </Text>
        <Ionicons name="log-out-outline" color={theme.primary} size={25} />
      </TouchableOpacity>
      <Link href="/browse" asChild>
        <TouchableOpacity className="bg-secondary w-full flex-row items-center justify-center gap-3 rounded-xl py-4">
          <Image
            src={image}
            className="border-primary aspect-square size-[30px] rounded-full border"
          />
          <Text className="text-primary text-center font-['Poppins'] text-xl">
            Contiue as {name}
          </Text>
        </TouchableOpacity>
      </Link>
    </Fragment>
  );
}
