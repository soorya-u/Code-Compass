import { stackOptions } from "@/constants/options";
import { Stack } from "expo-router";

export default function AboutLayout() {
  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen name="index" options={{ headerTitle: "About" }} />
    </Stack>
  );
}
