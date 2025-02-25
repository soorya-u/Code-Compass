import { content } from "./content";
import { imageSource } from "./img";

import { Markdown, TechType } from "@/types/markdown";

export const techTypeHeadings: Record<TechType, string> = {
  [TechType.markUpLang]: "MarkUp Languages",
  [TechType.styleSheet]: "Stylesheet Languages and Frameworks",
  [TechType.programmingLang]: "Programming Languages",
  [TechType.devOps]: "Dev Ops",
  [TechType.webDev]: "Web Development Frameworks",
  [TechType.database]: "Databases and ORMs",
  [TechType.mobileDev]: "Mobile Development Frameworks",
  [TechType.desktopDev]: "Desktop Development Frameworks",
  [TechType.others]: "Other Technologies",
};

export const markdown: Markdown[] = [
  {
    name: "Angular",
    content: content.angular,
    uri: imageSource.angular,
    route: "angular",
    type: TechType.webDev,
  },
  {
    name: "Bash",
    content: content.bash,
    uri: imageSource.bash,
    route: "bash",
    type: TechType.programmingLang,
  },
  {
    name: "CSS",
    content: content.css,
    uri: imageSource.css,
    route: "css",
    type: TechType.styleSheet,
  },
  {
    name: "Docker",
    content: content.docker,
    uri: imageSource.docker,
    route: "docker",
    type: TechType.devOps,
  },
  {
    name: "Flask",
    content: content.flask,
    uri: imageSource.flask,
    route: "flask",
    canInvert: true,
    type: TechType.webDev,
  },
  {
    name: "Git",
    content: content.git,
    uri: imageSource.git,
    route: "git",
    type: TechType.devOps,
  },
  {
    name: "GraphQL",
    content: content.graphQL,
    uri: imageSource.graphQL,
    route: "graphql",
    type: TechType.others,
  },
  {
    name: "HTML",
    content: content.html,
    uri: imageSource.html,
    route: "html",
    type: TechType.markUpLang,
  },
  {
    name: "Javascript",
    content: content.javascript,
    uri: imageSource.javascript,
    route: "javascript",
    type: TechType.programmingLang,
  },
  {
    name: "LaTeX",
    content: content.latex,
    uri: imageSource.latex,
    route: "latex",
    canInvert: true,
    type: TechType.markUpLang,
  },
  {
    name: "Mojo",
    content: content.mojo,
    uri: imageSource.mojo,
    route: "mojo",
    type: TechType.programmingLang,
  },
  {
    name: "MongoDB",
    content: content.mongoDB,
    uri: imageSource.mongoDB,
    route: "mongodb",
    type: TechType.database,
  },
  {
    name: "NextJS",
    content: content.nextJS,
    uri: imageSource.nextJS,
    route: "nextjs",
    canInvert: true,
    type: TechType.webDev,
  },
  {
    name: "Prisma",
    content: content.prisma,
    uri: imageSource.prisma,
    route: "prisma",
    canInvert: true,
    type: TechType.database,
  },
  {
    name: "Python",
    content: content.python,
    uri: imageSource.python,
    route: "python",
    type: TechType.programmingLang,
  },
  {
    name: "React Native",
    content: content.reactNative,
    uri: imageSource.reactNative,
    route: "react-native",
    canInvert: true,
    type: TechType.mobileDev,
  },
  {
    name: "React",
    content: content.react,
    uri: imageSource.react,
    route: "react",
    type: TechType.webDev,
  },
  {
    name: "Redis",
    content: content.redis,
    uri: imageSource.redis,
    route: "redis",
    type: TechType.database,
  },
  {
    name: "Rust",
    content: content.rust,
    uri: imageSource.rust,
    route: "rust",
    type: TechType.programmingLang,
  },
  {
    name: "SCSS",
    content: content.scss,
    uri: imageSource.scss,
    route: "scss",
    type: TechType.styleSheet,
  },
  {
    name: "SQL",
    content: content.sql,
    uri: imageSource.sql,
    route: "sql",
    type: TechType.database,
  },
  {
    name: "Tailwind CSS",
    content: content.tailwindCSS,
    uri: imageSource.tailwindCSS,
    route: "tailwind-css",
    type: TechType.styleSheet,
  },
  {
    name: "Tanstack Query",
    content: content.tanstackQuery,
    uri: imageSource.tanstackQuery,
    route: "tanstack-query",
    type: TechType.others,
  },
  {
    name: "Tauri",
    content: content.tauri,
    uri: imageSource.tauri,
    route: "tauri",
    type: TechType.desktopDev,
  },
  {
    name: "Typescript",
    content: content.typescript,
    uri: imageSource.typescript,
    route: "typescript",
    type: TechType.programmingLang,
  },
  {
    name: "Zod",
    content: content.zod,
    uri: imageSource.zod,
    route: "zod",
    type: TechType.others,
  },
];
