import { Stack } from "expo-router";
import { usePlatform } from "@/hooks/use-platform";
import { useTheme } from "@/hooks/use-theme";

function StackLayout() {
  const { setTheme } = useTheme();

  const backgroundColor = setTheme("rgb(10 10 10)", "rgb(229 231 235)");
  const foregroundColor = setTheme("rgb(229 231 235)", "rgb(10 10 10)");

  return (
    <Stack
      screenOptions={{
        headerTransparent: usePlatform(true, false),
        headerLargeTitle: true,
        headerShadowVisible: false,
        headerTintColor: foregroundColor,
        contentStyle: {
          backgroundColor: backgroundColor,
        },
        headerStyle: {
          backgroundColor: usePlatform(undefined, backgroundColor),
        },
        headerBlurEffect: setTheme("dark", "light"),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "About",
        }}
      />
    </Stack>
  );
}

export default StackLayout;
