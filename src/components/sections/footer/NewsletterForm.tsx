"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

// Newsletter sign-up (Figma: 376 × 52 pill input, 24px gap, lime button, consent text 24px below).
// The row may be 528px wide (the whole left block): "Subscribe" is 24px wider than Figma's
// "Search", and this keeps the input at its 376px.
// There is no backend, so a valid email just shows a thank-you message instead of reloading
// the page. type="email" + required let the browser check the address first.
export function NewsletterForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <form onSubmit={handleSubmit} className="flex max-w-[528px] items-center gap-3 sm:gap-6">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
            className="h-13 w-full min-w-0 flex-1 rounded-full border border-neutral-200 bg-white px-6 text-body-m text-neutral-950 placeholder:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:max-w-[376px]"
          />
          {/* Figma's button says "Search"; "Subscribe" is what it actually does */}
          <Button type="submit" className="shrink-0">
            Subscribe
          </Button>
        </form>

        {/* role="status" is a live region: it stays in the page (empty) so screen readers
            announce the text when it appears. The margin only exists once there is a message,
            so the empty element doesn't push the consent text down. */}
        <p role="status" className={`text-body-s font-medium text-primary-800 ${isSubscribed ? "mt-3" : ""}`}>
          {isSubscribed ? "Thanks for subscribing! Watch your inbox for our next update." : ""}
        </p>
      </div>

      <p className="max-w-[504px] text-body-xs">
        By subscribing, you agree to our{" "}
        <Link href="/privacy" className="underline-offset-2 hover:underline">
          Privacy Policy
        </Link>{" "}
        and consent to receive updates from our company.
      </p>
    </div>
  );
}
