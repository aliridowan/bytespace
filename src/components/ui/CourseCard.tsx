import Image from "next/image";
import { LevelIcon } from "@/components/icons/LevelIcon";
import { StarIcon } from "@/components/icons/StarIcon";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import type { Course } from "@/data/courses";

// Figma "Course_Card_1": 373 × 384, white, 1px Shuttle Gray/200 border, 24px radius.
// Photo inset 16px (341 × 195, 12px radius) with frosted info pills on it,
// then title/rating, level + students, price, 16px apart.
export function CourseCard({ course }: { course: Course }) {
  const pills = [
    { label: `${course.lessons} Lessons` },
    { label: course.duration },
    // The three pills need 338px (12 + 81 + 108 + 101 + 2 × 12 gap + 12). On narrower photos
    // (phones, tablets) the least important one is dropped instead of letting the row break
    // into two lines over the photo.
    { label: `${course.comments} Comments`, className: "hidden @min-[338px]:block" },
  ];

  return (
    <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-4 pb-5">
      {/* @container: the pills below react to this box's width, not the screen's,
          so the card works wherever it is placed */}
      <div className="@container relative aspect-[341/195] overflow-hidden rounded-xl">
        {/* alt="" because the title right below already names the course */}
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 341px, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
        {/* Figma: 60% #F6F6F6 with an 8px background blur, so the photo shows through */}
        <ul className="absolute bottom-4 left-3 flex flex-wrap gap-3 pr-3">
          {pills.map((pill) => (
            <li
              key={pill.label}
              className={`rounded-full bg-neutral-50/60 px-3 py-1.5 text-label-xs font-medium text-neutral-800 backdrop-blur-sm ${pill.className ?? ""}`}
            >
              {pill.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          {/* min-w-0 lets the title shrink so "truncate" can cut it with "…" like in Figma */}
          <div className="min-w-0">
            <h3 title={course.title} className="truncate text-heading-xs tracking-[-0.01em]">
              {course.title}
            </h3>
            <p className="text-body-xs text-neutral-500">
              by <span className="text-primary-600">{course.author}</span>
            </p>
          </div>
          <p className="flex shrink-0 items-center gap-1 text-body-l text-neutral-700">
            <span className="sr-only">Rating:</span>
            {course.rating}
            <StarIcon className="text-neutral-300" />
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-neutral-50 px-3 py-1.5 text-label-xs font-medium text-neutral-700">
            <LevelIcon />
            {course.level}
          </span>
          <AvatarGroup avatars={course.students} more={course.moreStudents} />
        </div>

        <p>
          <span className="font-heading text-heading-xs font-semibold tracking-[-0.01em] text-primary-800">
            ${course.price}
          </span>
          <span className="text-body-xs text-neutral-700">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
