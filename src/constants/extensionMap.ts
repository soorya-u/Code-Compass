import { type HeadingType } from "@/types/extentionMapper";

export const extLangMap = new Map<string, string>([
  ["js", "javascript"],
  ["ts", "typescript"],
  ["py", "python"],
  ["sh", "bash"],
  ["gql", "graphql"],
  ["rs", "rust"],
  ["yml", "yaml"],
]);

export const extHeadingMap = new Map<string, HeadingType>([
  ["bash", { headingName: "Bash", headingIcon: "" }],
  ["css", { headingName: "CSS", headingIcon: "" }],
  ["dockerfile", { headingName: "Dockerfile", headingIcon: "󰡨" }],
  ["gql", { headingName: "Graphql", headingIcon: "" }],
  ["html", { headingName: "HTML", headingIcon: "" }],
  ["js", { headingName: "Javascript", headingIcon: "" }],
  ["jsx", { headingName: "JSX", headingIcon: "" }],
  ["mojo", { headingName: "Mojo", headingIcon: "󰈸" }],
  ["prisma", { headingName: "Prisma", headingIcon: "" }],
  ["py", { headingName: "Python", headingIcon: "" }],
  ["rs", { headingName: "Rust", headingIcon: "" }],
  ["scss", { headingName: "SCSS", headingIcon: "" }],
  ["sh", { headingName: "Bash", headingIcon: "" }],
  ["sql", { headingName: "SQL", headingIcon: "" }],
  ["tex", { headingName: "LaTeX", headingIcon: "" }],
  ["ts", { headingName: "Typescript", headingIcon: "" }],
  ["tsx", { headingName: "Typescript JSX", headingIcon: "" }],
  ["yml", { headingName: "YAML", headingIcon: "" }],
]);
