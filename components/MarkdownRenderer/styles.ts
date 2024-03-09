import {
  type MarkedStyles,
  type UserTheme,
} from "react-native-marked/src/theme/types";
import { type ColorsPropType } from "react-native-marked/src/theme/colors";
import { type SpacingKeysType } from "react-native-marked/src/theme/spacing";

export const styles: MarkedStyles = {};

const spacing: Record<SpacingKeysType, number> = {
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
};

const colors: ColorsPropType = {
  border: "skyblue",
  code: "transparent",
  link: "skyblue",
  text: "white",
};

export const theme: UserTheme = {
  spacing,
  colors,
};
