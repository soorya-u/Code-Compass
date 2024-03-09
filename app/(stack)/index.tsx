import { Link } from "expo-router";
import { ScrollView, Text, FlatList, View } from "react-native";
import { markdown } from "@/utils/markdown";
function Home() {
  return (
    <>
      <FlatList
        data={markdown}
        renderItem={({ item }) => (
          <View className="justify-center items-center my-5">
            <Link href={`/md/${item.link}`} asChild>
              <Text>{item.name}</Text>
            </Link>
          </View>
        )}
      />
    </>
  );
}

export default Home;
