import { useMemo } from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { markdown } from "@/utils/markdown";

function StackLayout() {
  const { file: id } = useGlobalSearchParams<{ file: string }>();
  const title: string = useMemo(
    () => markdown.filter((file) => file.link === id)[0]?.name,
    [id]
  );

  return (
    <Stack screenOptions={{}}>
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
