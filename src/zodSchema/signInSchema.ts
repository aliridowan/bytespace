import { z } from "zod";
import { emailSchema } from "@/zodSchema/emailSchema";
import { passwordSchema } from "@/zodSchema/passwordSchema";

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignInValues = z.infer<typeof signInSchema>;
