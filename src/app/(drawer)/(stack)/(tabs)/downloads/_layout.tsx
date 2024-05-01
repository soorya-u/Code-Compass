import { Stack } from "expo-router";

import { useConstantStackOptions } from "@/hooks/use-screen-options";

export default function DownloadLayout() {
  const stackOptions = useConstantStackOptions();

  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Faviorites",
        }}
      />
    </Stack>
  );
}
