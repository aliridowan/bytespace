import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .min(1, { error: "Enter your email" })
  .pipe(z.email({ error: "Enter a valid email address" }));
