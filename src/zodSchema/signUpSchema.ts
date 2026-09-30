import { z } from "zod";
import { emailSchema } from "@/zodSchema/emailSchema";
import { passwordSchema } from "@/zodSchema/passwordSchema";

export const signUpSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, { message: "Enter your full name" })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),
  email: emailSchema,
  password: passwordSchema,
});

export type SignUpValues = z.infer<typeof signUpSchema>;
