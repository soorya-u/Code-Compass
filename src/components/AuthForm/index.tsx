import { Text, View, TouchableOpacity } from "react-native";

import { useConstantTheme } from "@/hooks/use-theme";
import { useAuth } from "@/hooks/use-auth";

import Input from "../Input";

type FieldType = {
  title: string;
  placeholder: string;
  name: "fullName" | "username" | "email" | "password";
  signUpOnly: boolean;
};

const fields: FieldType[] = [
  {
    title: "Full Name",
    placeholder: "John Doe",
    name: "fullName",
    signUpOnly: true,
  },
  {
    title: "Username",
    placeholder: "john-doe",
    name: "username",
    signUpOnly: true,
  },
  {
    title: "Email",
    placeholder: "johndoe@example.com",
    name: "email",
    signUpOnly: false,
  },
  {
    title: "Password",
    placeholder: "********",
    name: "password",
    signUpOnly: false,
  },
];

type AuthFormType = {
  type: "login" | "sign-up";
};

export default function AuthForm({ type }: AuthFormType) {
  const { styles, foregroundColor } = useConstantTheme();
  const { control, error, handleSubmit, isSubmitting } = useAuth(type);

  return (
    <View className="w-[85%] items-center justify-center gap-6 pt-4">
      {fields.map(
        (field, idx) =>
          ((type === "login" && !field.signUpOnly) || type === "sign-up") && (
            <Input
              key={idx}
              title={field.title}
              control={control}
              name={field.name}
              placeholder={field.placeholder}
            />
          ),
      )}
      {error && (
        <View className="w-full flex-row items-center justify-center rounded-md border-2 border-red-500 bg-red-400 py-2 opacity-85">
          <Text className="self-start text-base text-black">
            {type === "login" ? "Login" : "Registration"} Failed: {error}
          </Text>
        </View>
      )}
      <TouchableOpacity
        disabled={isSubmitting}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
        style={[
          styles.btnOutlineBg,
          { backgroundColor: foregroundColor, opacity: 1 },
        ]}
        onPress={handleSubmit}
      >
        <Text
          style={styles.btnText}
          className="text-center font-['Poppins'] text-2xl"
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
