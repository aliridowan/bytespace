"use client";

import Link from "next/link";
import { useState } from "react";
import { CourseCard } from "@/components/ui/CourseCard";
import { FEATURED, courseCategories, courses } from "@/data/courses";

// Figma chip: 12px/16px padding, fully rounded, Label M.
// Active = Electric Lime/400, others = Shuttle Gray/50 with Shuttle Gray/700 text.
const chipStyles =
  "rounded-full px-4 py-3 text-label-m font-medium whitespace-nowrap transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";
const activeChipStyles = "bg-secondary-400 text-neutral-950";
const inactiveChipStyles = "bg-neutral-50 text-neutral-700 hover:bg-neutral-100";

// Category chips + course grid. The chips filter the grid, so this is the only part of the
// section that needs state ("use client"); the heading around it stays a Server Component.
export function CourseBrowser() {
  const [activeCategory, setActiveCategory] = useState(FEATURED);

  const visibleCourses =
    activeCategory === FEATURED
      ? courses
      : courses.filter((course) => course.categories.includes(activeCategory));

  return (
    <>
      {/* Phones: one row that scrolls sideways (18 chips would be ~8 rows).
          From md: wrapped and centred like Figma (16px apart, 20px between rows).
          The negative margin lets the row scroll to the screen edge past the Container padding. */}
      <ul
        aria-label="Filter courses by category"
        className="-mx-4 mt-10 flex gap-4 overflow-x-auto px-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:flex-wrap md:justify-center md:gap-y-5 md:overflow-visible md:px-0"
      >
        {courseCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <li key={category} className="shrink-0">
              {/* aria-pressed: a toggle button, so screen readers say which filter is on */}
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`${chipStyles} ${isActive ? activeChipStyles : inactiveChipStyles}`}
              >
                {category}
              </button>
            </li>
          );
        })}
        <li className="flex shrink-0 items-center">
          <Link href="/search" className="text-label-m font-medium whitespace-nowrap text-primary-600 hover:underline">
            + More
          </Link>
        </li>
      </ul>

      {/* Announces the result after a filter change without moving focus */}
      <p aria-live="polite" className="sr-only">
        {visibleCourses.length} {visibleCourses.length === 1 ? "course" : "courses"} shown
      </p>

      {visibleCourses.length > 0 ? (
        // Figma: 3 columns, 40px gaps (3 × 373 + 2 × 40 = 1199). Three columns only from xl:
        // at 1024px the cards would be 294px and the photo pills break into two lines.
        // grid-cols-1 = minmax(0, 1fr), so a long truncated title can't stretch the card.
        <ul className="mt-19 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <li key={course.slug}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-19 text-center text-body-l text-neutral-500">
          No {activeCategory} courses yet. Check back soon.
        </p>
      )}
    </>
  );
}
