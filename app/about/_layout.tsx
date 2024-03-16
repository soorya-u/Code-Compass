import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";

function StackLayout() {
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
          headerTitle: "About",
        }}
      />
    </Stack>
  );
}

export default StackLayout;
