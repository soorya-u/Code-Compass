import { useMemo } from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { markdown } from "@/utils/markdown";
import { useTheme } from "@/hooks/use-theme";

function StackLayout() {
  const { file: id } = useGlobalSearchParams<{ file: string }>();
  const title: string = useMemo(
    () => markdown.filter((file) => file.link === id)[0]?.name,
    [id]
  );

  const { isDark } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: true,
        headerTintColor: isDark ? "black" : "white",
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
