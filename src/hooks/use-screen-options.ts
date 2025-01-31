import { useEffect } from "react";
import { useNavigation } from "expo-router";
import { useColorScheme } from "nativewind";
import { type NativeStackNavigationOptions } from "@react-navigation/native-stack/src/types";

export const useScreenOptions = (options: NativeStackNavigationOptions) => {
  const navigate = useNavigation();
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    navigate.setOptions(options);
  }, [navigate, colorScheme]);
};
