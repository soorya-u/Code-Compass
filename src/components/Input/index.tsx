import { Text, TextInput, View } from "react-native";
import { type Control, useController } from "react-hook-form";

import { type SignUpType, type LoginType } from "@/schema/auth";

type InputProps = {
  title: string;
  className?: string;
  control: Control<SignUpType> | Control<LoginType>;
  name: "username" | "fullName" | "password" | "email";
  placeholder: string;
};

export default function Input({
  title,
  placeholder,
  control,
  name,
}: InputProps) {
  const { field, fieldState } = useController<SignUpType | LoginType>({
    // @ts-ignore
    control,
    name: name,
    defaultValue: "",
  });

  return (
    <View className="w-[85%]">
      <Text className="absolute -top-3 left-3 z-10 rounded-full bg-black px-2 font-[Inder] text-base text-white">
        {title}
      </Text>
      <TextInput
        ref={field.ref}
        className="h-14 w-full rounded-md border border-white bg-black p-4 font-[Inder] text-base text-white"
        cursorColor="#fff"
        placeholderTextColor="#4f4f4f"
        placeholder={placeholder}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        aria-disabled={field.disabled}
        value={field.value}
      />
      <Text className="text-sm text-red-500">
        {fieldState.error && fieldState.error.message}
      </Text>
    </View>
  );
}
