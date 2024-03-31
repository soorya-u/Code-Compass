import { Stack } from "expo-router";

import { useConstantStackOptions } from "@/hooks/use-screen-options";

function StackLayout() {
  const stackOptions = useConstantStackOptions();

  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Profile",
        }}
      />
    </Stack>
  );
}

export default StackLayout;
