import { Stack } from "expo-router";

import { useConstantStackOptions } from "@/hooks/use-screen-options";

export default function AboutLayout() {
  const stackOptions = useConstantStackOptions();

  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "About",
        }}
      />
    </Stack>
  );
}
