import {
  type MarkedStyles,
  type UserTheme,
} from "react-native-marked/src/theme/types";
import { type ColorsPropType } from "react-native-marked/src/theme/colors";
import { type SpacingKeysType } from "react-native-marked/src/theme/spacing";

export const styles: MarkedStyles = {
  h1: {
    display: "none",
  },
  h2: {
    fontSize: 28,
    fontFamily: "Poppins",
  },
  h3: {
    fontSize: 24,
    fontFamily: "Poppins",
  },
  h4: {
    fontSize: 18,
    fontFamily: "Poppins",
  },
  link: {
    fontStyle: "normal",
    fontFamily: "Inder",
  },
  em: {
    fontFamily: "Ubuntu-Nerd",
    fontStyle: "italic",
  },
  li: {
    fontFamily: "Ubuntu-Nerd",
  },
  text: {
    fontFamily: "Ubuntu-Nerd",
  },
};

const spacing: Record<SpacingKeysType, number> = {
  xs: 0,
  s: 0,
  m: 0,
  l: 0,
};

const lightColors: ColorsPropType = {
  border: "#a3acb9",
  code: "transparent",
  link: "#469CF9",
  text: "black",
};

const darkColors: ColorsPropType = {
  border: "#3e4248",
  code: "transparent",
  link: "#469CF9",
  text: "white",
};

export const lightTheme: UserTheme = {
  spacing,
  colors: lightColors,
};

export const darkTheme: UserTheme = {
  spacing,
  colors: darkColors,
};
