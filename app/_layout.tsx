import { Tabs } from "expo-router";

function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen name="about" />
    </Tabs>
  );
}

export default RootLayout;
