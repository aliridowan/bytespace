"use server";

import { redirect } from "next/navigation";
import { signInSchema, type SignInValues } from "@/zodSchema/signInSchema";
import { signUpSchema, type SignUpValues } from "@/zodSchema/signUpSchema";

// Server Actions of the sign-in and sign-up forms. "use server" makes every export a
// function that runs on the server; the forms call them like normal async functions.
// redirect() from next/navigation must run here (or while rendering), not in a click or
// submit handler: in a Server Action it makes the browser navigate to the new page.

// Only returned when something is wrong; on success the action redirects instead.
export type AuthActionResult = { error: string };

export async function signIn(values: SignInValues): Promise<AuthActionResult> {
  // The browser already checked the form, but anything sent to a server can be forged,
  // so the same Zod schema checks it again here.
  const result = signInSchema.safeParse(values);
  if (!result.success) {
    return { error: "Please check your email and password." };
  }

  // No backend yet: this is where the account would be checked and a session created.
  redirect("/");
}

export async function signUp(values: SignUpValues): Promise<AuthActionResult> {
  const result = signUpSchema.safeParse(values);
  if (!result.success) {
    return { error: "Please check your details and try again." };
  }

  // No backend yet: this is where the account would be created.
  redirect("/sign-in");
}
