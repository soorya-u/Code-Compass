import { Fragment } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { signOut } from "@/supabase/auth/sign-out";
import { useTheme } from "@/hooks/use-theme";

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
  const { theme } = useTheme();
  return (
    <Fragment>
      <TouchableOpacity
        onPress={async () => await signOut().then(afterSignOut)}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl bg-secondary py-4"
      >
        <Text className="text-center font-poppins text-xl text-primary">
          Logout
        </Text>
        <Ionicons name="log-out-outline" color={theme.primary} size={25} />
      </TouchableOpacity>
      <Link href="/browse" asChild>
        <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 rounded-xl bg-secondary py-4">
          <Image
            src={image}
            className="aspect-square size-[30px] rounded-full border border-primary"
          />
          <Text className="text-center font-poppins text-xl text-primary">
            Contiue as {name}
          </Text>
        </TouchableOpacity>
      </Link>
    </Fragment>
  );
}
