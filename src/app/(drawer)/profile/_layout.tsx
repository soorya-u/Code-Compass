import { Stack } from "expo-router";

import { useConstantStackOptions } from "@/hooks/use-screen-options";

export default function ProfileLayout() {
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
