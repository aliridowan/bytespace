"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { TextField } from "@/components/ui/TextField";

type PasswordFieldProps = Omit<
  React.ComponentProps<typeof TextField>,
  "type" | "trailing"
>;

export function PasswordField({
  id,
  className = "",
  ...props
}: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      id={id}
      // Hides Edge's own "reveal password" eye, so there aren't two
      className={`[&_input::-ms-reveal]:hidden ${className}`}
      {...props}
      type={isVisible ? "text" : "password"}
      trailing={
        // type="button" so clicking it never submits the form.
        // aria-pressed tells screen readers whether the password is shown right now,
        // aria-controls which input the button changes.
        <button
          type="button"
          aria-label="Show password"
          aria-pressed={isVisible}
          aria-controls={id}
          onClick={() => setIsVisible((visible) => !visible)}
          className="flex size-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          {isVisible ? (
            <EyeOff aria-hidden="true" className="size-5" />
          ) : (
            <Eye aria-hidden="true" className="size-5" />
          )}
        </button>
      }
    />
  );
}
