declare module "*.mdx";
declare module "*.md" {
  const content: string;
  export default content;
}
