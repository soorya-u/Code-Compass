import { ReactNode } from "react";
import { type TextStyle } from "react-native";
import { Renderer, type RendererInterface } from "react-native-marked";

class CustomRenderer extends Renderer implements RendererInterface {
  
}

export const renderer = new CustomRenderer();
