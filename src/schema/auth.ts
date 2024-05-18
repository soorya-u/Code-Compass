import { z } from "zod";

const nameRegex = /^[a-zA-Z ]+$/;
const usernameRegex = /^[a-zA-Z0-9_-]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-]).{8,}$/;

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "This Field is Required" })
    .regex(nameRegex, { message: "Name must contain only Alphabets" }),
  username: z
    .string()
    .min(1, { message: "This Field is Required" })
    .regex(usernameRegex, {
      message: "Username must include only lowercase letters and hyphen",
    }),
  email: z.string().min(1, { message: "This Field is Required" }).email({
    message: "Enter a Valid Email",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(passwordRegex, {
      message:
        "Password must be at least a uppercase letter, a lowercase letter, a digit, and a special symbol.",
    }),
});

export type SignUpType = z.infer<typeof signUpSchema>;

export const loginSchema = signUpSchema.omit({
  fullName: true,
  username: true,
});

export type LoginType = z.infer<typeof loginSchema>;
