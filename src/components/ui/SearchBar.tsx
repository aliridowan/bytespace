"use client";

import { SearchIcon } from "@/components/icons/SearchIcon";
import { Button } from "@/components/ui/Button";

// Figma "Search_Bar": white 461×52 field (24px radius, 12px/24px padding, 8px gap)
// + 16px gap + the "Search" button. On small screens the field shrinks, the button keeps its size.
//
// Searching doesn't filter yet: whatever is typed, submitting (Enter or the button) scrolls
// smoothly to the courses section. The root layout's scroll-pt keeps the section's top
// clear of the fixed navbar.
export function SearchBar({ className = "" }: { className?: string }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stay on the page instead of submitting the form
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form onSubmit={handleSubmit} role="search" className={`flex w-full max-w-[581px] items-center gap-2 sm:gap-4 ${className}`}>
      <label className="flex h-13 min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-4 sm:px-6 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-secondary-400">
        <SearchIcon className="shrink-0 text-neutral-400" />
        {/* The visible placeholder isn't a label, so the input gets an accessible name here */}
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-body-l text-neutral-950 outline-none placeholder:text-neutral-400"
        />
      </label>
      <Button type="submit" className="shrink-0">
        Search
      </Button>
    </form>
  );
}
