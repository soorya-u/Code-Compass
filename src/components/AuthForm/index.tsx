import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesome } from "@expo/vector-icons";

import {
  signUpSchema,
  loginSchema,
  type LoginType,
  type SignUpType,
} from "@/schema/auth";
import { useConstantTheme } from "@/hooks/use-theme";

import Input from "../Input";
import { signUpWithCredentials } from "@/supabase/auth/sign-up";
import { useState } from "react";

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
  const [err, setErr] = useState<string>("asd");
  const router = useRouter();
  const { styles, foregroundColor } = useConstantTheme();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginType | SignUpType>({
    resolver: zodResolver(type === "login" ? loginSchema : signUpSchema),
  });

  const authFunction = async (val: SignUpType | LoginType) => {
    if (type === "sign-up") {
      await signUpWithCredentials(val as SignUpType)
        .then(() => router.replace("/"))
        .catch((err: { message: string }) => setErr(err.message));
    }
  };

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
      {err && (
        <View className="w-full items-center justify-center rounded-md border-[3px] border-red-500 bg-red-400">
          <FontAwesome name="stop-circle" />
          <Text className="self-start text-black">
            {type === "login" ? "Login" : "Registration"} Failed
          </Text>
        </View>
      )}
      <TouchableOpacity
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="w-full flex-row items-center justify-center gap-3 rounded-xl py-4"
        style={[
          styles.btnOutlineBg,
          { backgroundColor: foregroundColor, opacity: 1 },
        ]}
        onPress={handleSubmit(authFunction)}
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
