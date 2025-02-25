import { Image, TouchableOpacity } from "react-native";
import { Markdown } from "@/types/markdown";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import Animated from "react-native-reanimated";

import logo from "@/assets/icons/logo.png";

type IconProps = {
  color: string | undefined;
};

export function DrawerIcon(props: IconProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <MaterialIcons
        className="pr-[10px]"
        name="clear-all"
        color={props.color}
        size={30}
      />
    </TouchableOpacity>
  );
}

export function MarkdownIcon({
  tintColor,
  md,
}: {
  tintColor: string | undefined;
  md: Markdown;
}) {
  return (
    <TouchableOpacity>
      <Animated.Image
        className="size-[30px]"
        source={md.uri}
        style={md.canInvert && { tintColor }}
        alt={md.name}
        sharedTransitionTag={md.name}
      />
    </TouchableOpacity>
  );
}

export function LogoIcon({ tintColor }: { tintColor: string | undefined }) {
  return (
    <TouchableOpacity>
      <Image
        source={logo}
        className="size-9"
        style={{ tintColor }}
        alt="logo"
      />
    </TouchableOpacity>
  );
}
