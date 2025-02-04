import { Stack } from "expo-router";

import { useTheme } from "@/hooks/use-theme";

import { stackOptions } from "@/constants/options";

function StackLayout() {
  const theme = useTheme();

  return (
    <Stack screenOptions={stackOptions(theme)}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="[file]" options={{ headerLeft: undefined }} />
    </Stack>
  );
}

export default StackLayout;
