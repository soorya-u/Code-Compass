import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

function Home() {
  return (
    <>
      <ScrollView>
        <Link href="/md/angular">Go To File</Link>
      </ScrollView>
    </>
  );
}

export default Home;
