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
          headerTitle: "Home",
        }}
      />
      <Stack.Screen
        name="[file]"
        options={{
          headerLeft: undefined,
        }}
      />
    </Stack>
  );
}

export default StackLayout;
