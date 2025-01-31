import { Platform } from "react-native";
import { colorScheme } from "nativewind";

type IPlatform<T> = {
  ios: T;
  android: T;
  web: T;
};

export const setTheme = <T>(darkSetting: T, lightSetting: T) =>
  colorScheme.get() === "dark" ? darkSetting : lightSetting;

export const setPlatformSettings = <T>(setting: Partial<IPlatform<T>>) => {
  switch (Platform.OS) {
    case "ios":
      return setting.ios;
    case "android":
      return setting.android;
    default:
      return setting.web;
  }
};
