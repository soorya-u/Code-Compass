import { stackOptions } from "@/constants/options";
import { Stack } from "expo-router";


export default function DownloadLayout() {

  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen name="index" options={{ headerTitle: "Downloads" }} />
    </Stack>
  );
}
