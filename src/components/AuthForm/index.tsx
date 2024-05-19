import { Text, View, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema, type SignUpType } from "@/schema/auth";
import { useConstantTheme } from "@/hooks/use-theme";

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

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <View className="w-[85%] items-center justify-center gap-6 py-4">
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
      <TouchableOpacity
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
        style={[
          styles.btnOutlineBg,
          { backgroundColor: foregroundColor, opacity: 1 },
        ]}
        onPress={handleSubmit(
          (val) => console.log(val),
          (e) => console.log(e),
        )}
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
