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

  const backgroundColor = setTheme("rgb(10 10 10)", "rgb(229 231 235)");
  const foregroundColor = setTheme("rgb(229 231 235)", "rgb(10 10 10)");

  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerLargeTitle: true,
        headerShadowVisible: false,
        headerTintColor: foregroundColor,
        contentStyle: {
          backgroundColor: backgroundColor,
        },
        headerBlurEffect: setTheme("dark", "light"),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerSearchBarOptions: {
            placeholder: "Search",
            barTintColor: setTheme("rgb(20 20 20)", "rgb(248 250 252)"),
            textColor: foregroundColor,
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
