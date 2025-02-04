import { Text, TextInput, View } from "react-native";
import { type Control, useController } from "react-hook-form";

import { type SignUpType, type LoginType } from "@/schema/auth";
import { useTheme } from "@/hooks/use-theme";

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
  const { theme, setTheme } = useTheme();

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
        className="absolute -top-3 left-3 z-10 rounded-full px-2 font-inder text-base"
      >
        {title}
      </Text>
      <TextInput
        className="h-14 w-full items-center justify-center rounded-md border border-secondary bg-primary px-4 font-inder text-base text-secondary"
        cursorColor={setTheme("#fff", "#000")}
        placeholderTextColor="#4f4f4f"
        placeholder={placeholder}
        onChangeText={field.onChange}
        aria-disabled={field.disabled}
        value={field.value}
      />
      {fieldState.error && fieldState.error.message && (
        <Text className="pl-2 pt-1 font-ubuntu text-[14px] text-red-500">
          {fieldState.error && fieldState.error.message}
        </Text>
      )}
    </View>
  );
}
