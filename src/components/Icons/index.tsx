import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

import { TouchableOpacity } from "react-native-gesture-handler";

type IconProps = {
  color: string | undefined;
};

export function DrawerIcon(props: IconProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <MaterialIcons name="clear-all" color={props.color} size={30} />
    </TouchableOpacity>
  );
}
