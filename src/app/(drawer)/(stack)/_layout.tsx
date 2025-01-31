import { stackOptions } from "@/constants/options";
import { Stack } from "expo-router";


function StackLayout() {

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
