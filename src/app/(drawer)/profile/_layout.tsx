import { Stack } from "expo-router";

import { useTheme } from "@/hooks/use-theme";

import { stackOptions } from "@/constants/options";

export default function ProfileLayout() {
  const theme = useTheme();
  return (
    <Stack screenOptions={stackOptions(theme)}>
      <Stack.Screen name="index" options={{ headerTitle: "Profile" }} />
    </Stack>
  );
}
