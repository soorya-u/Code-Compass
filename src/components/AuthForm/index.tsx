import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function AuthForm() {
  const [username, setUsername] = useState("");

  return (
    <>
      <View className="relative">
        <Text className="absolute -top-[8] left-4 z-10 bg-black text-white">
          Username
        </Text>
        <TextInput
          className="h-14 w-[80%] rounded-xl border border-white px-4 font-['Ubuntu-Nerd'] text-white"
          placeholder="Enter Username Here"
          value={username}
          onChangeText={(e) => setUsername(e)}
        />
      </View>
      <Button title="Submit" color="red" />
    </>
  );
}
