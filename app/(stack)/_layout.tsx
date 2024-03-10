import { useMemo } from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { markdown } from "@/utils/markdown";
import ThemeToggler from "@/components/ThemeToggler";

function StackLayout() {
  const { file: id } = useGlobalSearchParams<{ file: string }>();
  const title: string = useMemo(
    () => markdown.filter((file) => file.link === id)[0]?.name,
    [id]
  );

  return (
    <Stack
      screenOptions={{
        headerRight: () => <ThemeToggler />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
        }}
      />
      <Stack.Screen
        name="md/[file]"
        options={{
          headerTitle: title,
        }}
      />
    </Stack>
  );
}

export default StackLayout;
