import { Platform } from "react-native";

export const usePlatform = <T>(
  iosSetting: T,
  defaultSetting: T
) => {
  switch (Platform.OS) {
    case "ios":
      return iosSetting;
    default:
      return defaultSetting;
  }
};
