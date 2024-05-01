import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome } from "@expo/vector-icons";

const logo = require("@/assets/icons/icon.png");

export default function Auth() {
  return (
    <SafeAreaView>
      <View className="h-full w-full items-center justify-between py-5">
        <View className="flex-1 items-center justify-start gap-y-7">
          <View className="items-center">
            <Image source={logo} className="h-[70px] w-[70px]" />
            <Text className="font-['Jersey'] text-6xl font-bold italic">
              Code Compass
            </Text>
            <Text></Text>
          </View>
          <Text className="font-['Poppins'] text-3xl">Connect with Us</Text>
        </View>
        <View className="w-[90%] flex-1 items-center justify-end gap-y-2">
          <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 rounded-xl bg-black py-4">
            <FontAwesome name="github" color="white" size={25} />
            <Text className="text-center font-['Poppins'] text-xl text-white">
              Login with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 rounded-xl bg-black py-4">
            <FontAwesome name="google" color="white" size={25} />
            <Text className="text-center font-['Poppins'] text-xl text-white">
              Login with Github
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
