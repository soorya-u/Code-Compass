const extLangMap = new Map<string, string>([
  ["js", "javascript"],
  ["ts", "typescript"],
  ["py", "python"],
  ["sh", "bash"],
  ["gql", "graphql"],
  ["rs", "rust"],
  ["yml", "yaml"],
]);

const extHeadingMap = new Map<string, string>([
  ["bash", "Bash"],
  ["css", "CSS"],
  ["dockerfile", "Dockerfile"],
  ["gql", "Graphql"],
  ["html", "HTML"],
  ["js", "Javascript"],
  ["jsx", "JSX"],
  ["mojo", "Mojo"],
  ["prisma", "Prisma"],
  ["py", "Python"],
  ["rs", "Rust"],
  ["scss", "SCSS"],
  ["sh", "Bash"],
  ["sql", "SQL"],
  ["tex", "LaTeX"],
  ["ts", "Typescript"],
  ["tsx", "Typescript JSX"],
  ["yml", "YAML"],
]);

export const extentionLanguagesMapper = (ext: string) => {
  const extention = ext.toLowerCase();
  const lang = extLangMap.get(extention);
  return lang ?? extention;
};

export const extentionHeadingMapper = (ext: string) => {
  return extHeadingMap.get(ext.toLowerCase())!;
};
