"use client";

import Image from "next/image";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signIn } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/Button";
import { PasswordField } from "@/components/ui/PasswordField";
import { TextField } from "@/components/ui/TextField";
import { signInSchema, type SignInValues } from "@/zodSchema/signInSchema";
import Link from "next/link";

// Figma uses a separate "Black" palette for the divider and the grey text on this card;
// these two colours exist only here.
const dividerColor = "bg-[#d1d1d1]";
const mutedText = "text-[#888888]";

const socialLogins = [
  { name: "Facebook", icon: "/icons/social/facebook.svg" },
  { name: "Google", icon: "/icons/social/google.svg" },
];

const socialDemoMessage = "Social sign-in isn't available in this demo yet.";

// Sign-in card (Figma "Login" frame). The content (683px from xl) has three blocks spread
// over its height (space-between):
//   1. heading, then the form (40px apart; fields 24px apart)
//   2. "or" divider + Facebook/Google buttons (40px apart)
//   3. "New user? Create an account"
// The form uses React Hook Form with the Zod schema (zodResolver): register() connects each
// input, handleSubmit() checks the values against signInSchema and calls onValid only when
// every field passes. noValidate turns off the browser's own popups so only our messages show.
// A valid form goes to the signIn Server Action, which redirects to the home page.
export function SignInCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  // isPending is true while the Server Action runs (and until the redirect is done)
  const [isPending, startTransition] = useTransition();

  // The action runs inside startTransition, as Next.js expects for Server Actions called
  // from an event handler: its redirect() then becomes a normal page change.
  function onValid(values: SignInValues) {
    startTransition(async () => {
      // Shown before the call: after a redirect the code below "await" doesn't run.
      // The Toaster lives in the root layout, so the toast stays while the home page opens.
      const toastId = toast.success("Signed in successfully");

      // Only comes back when the server rejected the values
      const result = await signIn(values);
      toast.dismiss(toastId);
      toast.error(result.error);
    });
  }

  return (
    <div
      className={`rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:py-[50px] xl:flex xl:min-h-[784px] xl:flex-col xl:justify-center`}
    >
      <div className="flex flex-col justify-between gap-10 xl:min-h-[683px]">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-body-l text-primary-800">Sign In</p>
            <h2 className="text-heading-s tracking-[-0.01em] text-neutral-950 sm:text-heading-m">
              Welcome Back
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onValid)}
            noValidate
            className="flex flex-col gap-6"
          >
            <TextField
              id="sign-in-email"
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <PasswordField
              id="sign-in-password"
              label="Password"
              autoComplete="current-password"
              placeholder="********"
              error={errors.password?.message}
              {...register("password")}
            />

            {/* Disabled while the action runs, so a double click can't send the form twice */}
            <Button type="submit" disabled={isPending} className="self-end">
              Sign In
            </Button>
          </form>
        </div>

        <div className="flex flex-col gap-10">
          {/* Figma: 200px lines with 11px around "or"; here the lines take the rest of the row */}
          <div className="flex items-center gap-[11px]">
            <span
              aria-hidden="true"
              className={`h-px flex-1 ${dividerColor}`}
            />
            <span className={`text-body-l ${mutedText}`}>or</span>
            <span
              aria-hidden="true"
              className={`h-px flex-1 ${dividerColor}`}
            />
          </div>

          {/* 72px square buttons (24px radius, 1px border) with the 40px icon in the middle */}
          <div className="flex justify-center gap-4">
            {socialLogins.map((social) => (
              <button
                key={social.name}
                type="button"
                aria-label={`Sign in with ${social.name}`}
                onClick={() => toast.info(socialDemoMessage)}
                className="flex size-18 items-center justify-center rounded-3xl border border-[#d1d1d1] bg-white transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <Image src={social.icon} alt="" width={40} height={40} />
              </button>
            ))}
          </div>
        </div>
        <p className={`flex justify-center gap-1 text-body-m`}>
          New User?
          <Link href="/sign-up" className="text-primary-800 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
