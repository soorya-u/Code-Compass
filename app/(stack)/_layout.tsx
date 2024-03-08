import { Stack } from "expo-router";

function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="md/[file]" />
    </Stack>
  );
}

export default StackLayout;
