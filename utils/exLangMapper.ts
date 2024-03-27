const extLangMap = new Map<string, string>([
  ["js", "javascript"],
  ["ts", "typescript"],
  ["py", "python"],
  ["sh", "bash"],
  ["gql", "graphql"],
  ["rs", "rust"],
]);

export const extentionLanguagesMapper = (ext: string) => {
  const lang = extLangMap.get(ext);
  return lang ?? ext;
};
