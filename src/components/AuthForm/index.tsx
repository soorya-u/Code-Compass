import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpType } from "@/schema/auth";

import Input from "../Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useConstantTheme } from "@/hooks/use-theme";

type AuthFormType = {
  type: "login" | "sign-up";
};

export default function AuthForm({ type }: AuthFormType) {
  const { styles } = useConstantTheme();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <View className="w-full items-center justify-center gap-6 py-4">
      {type === "sign-up" && (
        <>
          <Input
            title="Full Name"
            placeholder="John Doe"
            name="fullName"
            control={control}
          />
          <Input
            title="Username"
            placeholder="john-doe"
            name="username"
            control={control}
          />
        </>
      )}
      <Input
        title="Email"
        placeholder="johndoe@example.com"
        name="email"
        control={control}
      />
      <Input
        title="Password"
        placeholder="*******"
        name="password"
        control={control}
      />
      <TouchableOpacity
        className="w-full bg-red-500 flex-row items-center justify-center gap-3 rounded-xl py-4"
      >
        <Text
          style={styles.btnText}
          className="w-full bg-red-500 text-center font-['Poppins'] text-xl"
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
