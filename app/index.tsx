import { SafeAreaView, Text } from "react-native";

function Home() {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 24, color: "skyblue" }}>Hello RN</Text>
      </SafeAreaView>
    </>
  );
}

export default Home;
