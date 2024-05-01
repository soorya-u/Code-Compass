import { Stack } from "expo-router";

import { useConstantStackOptions } from "@/hooks/use-screen-options";

function StackLayout() {
  const stackOptions = useConstantStackOptions();

  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="[file]" />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
        }}
      />
    </Stack>
  );
}

export default StackLayout;
