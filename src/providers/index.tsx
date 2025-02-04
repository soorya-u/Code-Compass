import ThemeProvider from "@/context/theme";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
