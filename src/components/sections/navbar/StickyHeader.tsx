"use client";

import { useScrolled } from "@/hooks/useScrolled";

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
