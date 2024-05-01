import { Link } from "expo-router";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("@/assets/icons/icon.png");

export default function Index() {
  return (
    <SafeAreaView>
      <View className="h-full items-center justify-between">
        <View className="flex-col items-center justify-center gap-y-2 pt-5">
          <Image source={logo} className="h-[70px] w-[70px]" />
          <Text className="font-['Jersey'] text-6xl font-bold italic">
            Code Compass
          </Text>
        </View>
        <View>
          <Link href="/(auth)/" asChild>
            <TouchableOpacity className="mb-10">
              <Text>Navigate to Signin</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/home" asChild>
            <TouchableOpacity className="mb-10">
              <Text>Navigate to Tabs</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
