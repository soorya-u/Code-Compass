"use dom";

import "@/global.css";
import { useColorScheme } from "nativewind";

export default function UploadScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <div>
      <h1 className="text-3xl text-red-500 dark:text-blue-500">
        Upload Screen
      </h1>
    </div>
  );
}
