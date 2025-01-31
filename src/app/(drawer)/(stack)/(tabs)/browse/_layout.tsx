import { stackOptions } from "@/constants/options";
import { Stack } from "expo-router";

export default function BrowseLayout() {
  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen name="index" options={{ headerTitle: "Browse" }} />
    </Stack>
  );
}
