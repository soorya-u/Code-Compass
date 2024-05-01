import { Stack } from "expo-router";

import { HeaderIcon as HomeHeaderIcon } from "./index";
import { HeaderIcon as SettingHeaderIcon } from "./settings";

import { useConstantStackOptions } from "@/hooks/use-screen-options";

function StackLayout() {
  const stackOptions = useConstantStackOptions();

  return (
    <Stack screenOptions={stackOptions}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: ({ tintColor }) => (
            <HomeHeaderIcon tintColor={tintColor} />
          ),
        }}
      />
      <Stack.Screen name="md/[file]" />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          headerLeft: ({ tintColor }) => (
            <SettingHeaderIcon tintColor={tintColor} />
          ),
        }}
      />
    </Stack>
  );
}

export default StackLayout;
