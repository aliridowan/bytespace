import type { Metadata } from "next";
import { AuthShell } from "@/components/sections/auth/AuthShell";
import { SignInCard } from "@/components/sections/auth/SignInCard";

export const metadata: Metadata = {
  title: "Sign in – ByteSpace",
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <SignInCard />
    </AuthShell>
  );
}
