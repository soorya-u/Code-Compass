import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";

function StackLayout() {
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
        contentStyle: {
          backgroundColor: "black",
        },
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
