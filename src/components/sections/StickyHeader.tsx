"use client";

import { useScrolled } from "@/hooks/useScrolled";

// Transparent over the hero (as in Figma). Once the page scrolls, a see-through blue
// background with blur fades in so the white links stay readable over any section,
// and the bar gets shorter (children read the state through the "group" class).
//
// fixed, not sticky: the height changes on scroll, and a sticky header would push the
// whole page up and down as it resizes. A fixed header sits outside the page flow.
// z-50 keeps it above section content that creates its own layer (images, transforms).
const headerStyles =
  "group fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none " +
  "data-[scrolled=true]:bg-primary-600/80 data-[scrolled=true]:shadow-lg data-[scrolled=true]:backdrop-blur-md";

type StickyHeaderProps = {
  children: React.ReactNode;
};

// Only the scroll state lives here. The logo and links are passed in as children,
// so they stay Server Components even though this wrapper is a Client Component.
export function StickyHeader({ children }: StickyHeaderProps) {
  const isScrolled = useScrolled();

  return (
    <header data-scrolled={isScrolled} className={headerStyles}>
      {children}
    </header>
  );
}
