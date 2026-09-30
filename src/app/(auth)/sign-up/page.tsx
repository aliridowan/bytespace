import type { Metadata } from "next";
import { AuthShell } from "@/components/sections/auth/AuthShell";
import { SignUpCard } from "@/components/sections/auth/SignUpCard";

export const metadata: Metadata = {
  title: "Sign up – ByteSpace",
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <SignUpCard />
    </AuthShell>
  );
}
