import { StyleSheet } from "react-native";

export const sections = [
  {
    heading: "Code Compass",
    paragraph:
      "Code Compass is a mobile Application packed with cheat sheets and references for various languages, stacks, and frameworks.",
  },
  {
    heading: "Proudly Open Source",
    paragraph:
      "Code Compass is open source and powered by open source software. The code is available on GitHub.",
  },
];

type Project = {
  name: string;
  url: `${string}:${string}`;
  style: {
    text: {
      fontFamily: string;
      color: string;
    };
  };
};

export const projects: Project[] = [
  {
    name: "Belief",
    url: "https://belief.soorya-u.dev",
    style: StyleSheet.create({
      text: {
        fontFamily: "Chakra-Petch",
        color: "#1da1f2",
      },
    }),
  },
  {
    name: "Grade Grove",
    url: "https://grade-grove.soorya-u.dev",
    style: StyleSheet.create({
      text: {
        fontFamily: "Audiowide",
        color: "#eee",
      },
    }),
  },
];
