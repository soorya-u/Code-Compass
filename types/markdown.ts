export enum TechType {
  markUpLang,
  styleSheet,
  devOps,
  webDev,
  programmingLang,
  database,
  mobileDev,
  desktopDev,
  others,
}

export type Markdown = {
  name: string;
  content: string;
  img: any;
  link: string;
  canInvert?: boolean;
  type: TechType;
};
