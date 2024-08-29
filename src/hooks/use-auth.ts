import { useState } from "react";
import { useRouter } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  LoginType,
  SignUpType,
  loginSchema,
  signUpSchema,
} from "@/schema/auth";
import { signUpWithCredentials } from "@/supabase/auth/sign-up";
import { signInWithCredentials } from "@/supabase/auth/sign-in";

export const useAuth = (type: "login" | "sign-up") => {
  const [err, setErr] = useState<string>("");
  const router = useRouter();

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
    } else if (type === "login") {
      await signInWithCredentials(val as LoginType)
        .then(() => router.replace("/"))
        .catch((err: { message: string }) => setErr(err.message));
    }
  };

  return {
    control,
    error: err,
    isSubmitting,
    handleSubmit: handleSubmit(authFunction),
  };
};
