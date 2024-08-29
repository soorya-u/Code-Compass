import { Image } from "react-native";

import logo from "@/assets/icons/logo.png";
import markdown from "@/assets/img/markdown.png";
import upload from "@/assets/img/upload.png";
import download from "@/assets/img/download.png";

export const carouselContent = [
  {
    heading: "Code Guidebook",
    paragraph:
      "Dive into our repository, packed with cheat sheets and references covering various languages, stacks, and frameworks.",
    image: Image.resolveAssetSource(logo).uri,
    imageTag: "logo",
  },
  {
    heading: "Markdown Reading",
    paragraph:
      "Explore the efficiency of Markdown reading with its simple formatting for browsing docs.",
    image: Image.resolveAssetSource(markdown).uri,
    imageTag: "markdown",
  },
  {
    heading: "Offline Access",
    paragraph:
      "Access your resources anytime, anywhere with our convenient offline download feature.",
    image: Image.resolveAssetSource(download).uri,
    imageTag: "download",
  },
  {
    heading: "Share Your Creations",
    paragraph:
      "Unleash your knowledge by uploading your own Markdown document and sharing with others in the community.",
    image: Image.resolveAssetSource(upload).uri,
    imageTag: "upload",
  },
];
