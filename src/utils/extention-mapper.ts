import { extHeadingMap, extLangMap } from "@/constants/extension-map";

export const extensionLanguagesMapper = (ext: string) => {
  const extention = ext.toLowerCase();
  const lang = extLangMap.get(extention);
  return lang ?? extention;
};

export const extensionHeadingMapper = (ext: string) => {
  return extHeadingMap.get(ext.toLowerCase())!;
};
