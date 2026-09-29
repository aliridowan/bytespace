import Form from "next/form";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { Button } from "@/components/ui/Button";

// Figma "Search_Bar": white 461×52 field (24px radius, 12px/24px padding, 8px gap)
// + 16px gap + the "Search" button. On small screens the field shrinks, the button keeps its size.
//
// next/form: a GET form that navigates on the client to /search?q=... instead of a full reload,
// and still works as a normal form before JavaScript loads.
export function SearchBar({ className = "" }: { className?: string }) {
  return (
    <Form action="/search" role="search" className={`flex w-full max-w-[581px] items-center gap-2 sm:gap-4 ${className}`}>
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
    </Form>
  );
}
