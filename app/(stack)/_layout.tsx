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

  const { setTheme } = useTheme();

  const backgroundColor = setTheme("black", "white");
  const foregroundColor = setTheme("white", "black");

  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTintColor: foregroundColor,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerSearchBarOptions: {
            placeholder: "Search",
          },
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
