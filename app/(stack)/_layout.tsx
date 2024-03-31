import { Stack } from "expo-router";

import { useConstantStackOptions } from "@/hooks/use-screen-options";

function StackLayout() {
  const stackOptions = useConstantStackOptions();

  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen name="index" />
      <Stack.Screen name="md/[file]" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}

export default StackLayout;
