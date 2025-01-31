import { Text, TextInput, View } from "react-native";
import { type Control, useController } from "react-hook-form";

import { type SignUpType, type LoginType } from "@/schema/auth";
import { setTheme } from "@/utils/setters";
import { theme } from "@/constants/theme";

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
    <View className="w-full">
      <Text
        style={{
          color: theme.secondary,
          backgroundColor: theme.primary,
        }}
        className="absolute -top-3 left-3 z-10 rounded-full px-2 font-[Inder] text-base"
      >
        {title}
      </Text>
      <TextInput
        className="border-secondary bg-primary text-secondary h-14 w-full items-center justify-center rounded-md border px-4 font-[Inder] text-base"
        cursorColor={setTheme("#fff", "#000")}
        placeholderTextColor="#4f4f4f"
        placeholder={placeholder}
        onChangeText={field.onChange}
        aria-disabled={field.disabled}
        value={field.value}
      />
      {fieldState.error && fieldState.error.message && (
        <Text className="pl-2 pt-1 font-[Ubuntu-Nerd] text-[14px] text-red-500">
          {fieldState.error && fieldState.error.message}
        </Text>
      )}
    </View>
  );
}
