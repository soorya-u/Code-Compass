import { Platform } from "react-native";

type IPlatform<T> = {
  ios: T;
  android: T;
  web: T;
};

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
