import Image from "next/image";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { happyStudents, learningProgress } from "@/data/hero";

// Student photo with the lime ring behind it and three floating stat cards.
//
// The box is the visible part of the Figma image (578 × 512; the photo is 541 tall but the
// Hero clips its bottom 29px). Everything inside is placed in % of this box, converted from the
// Figma positions, so the whole group scales down together on smaller screens.
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[578/512] w-full max-w-[578px]">
      {/* Lime ring: Figma circle 1149px with a 320px border -> hole = 44.3% of the radius.
          left -286px / top 70px relative to the photo. */}
      <div
        aria-hidden="true"
        className="absolute top-[13.7%] left-[-49.5%] aspect-square w-[198.8%] rounded-full bg-[radial-gradient(circle_closest-side,transparent_44.3%,var(--color-secondary-500)_44.3%)]"
      />

      <Image
        src="/images/sections/student-laptop.png"
        alt="Smiling student with headphones holding a laptop"
        width={578}
        height={541}
        sizes="(min-width: 640px) 578px, 100vw"
        preload
        className="absolute inset-x-0 top-0 h-auto w-full"
      />

      {/* Cards need ~250px of room; on phones they would cover the photo, so they start at md */}
      <FloatingCard className="absolute top-[24.4%] left-[-4.5%] hidden md:flex">
        <p className="text-label-m font-medium">UI/UX Design</p>
        <p className="text-body-xs text-neutral-500">200 Courses • 1000+ Students</p>
      </FloatingCard>

      <FloatingCard className="absolute top-[27.1%] left-[71.1%] hidden w-58 md:flex">
        <p className="text-body-s text-neutral-700">Learning Progress</p>
        <p className="font-heading text-heading-s font-semibold">{learningProgress}%</p>
        {/* role="progressbar" + aria-value* so screen readers announce it as progress, not a plain box */}
        <div
          role="progressbar"
          aria-label="Learning progress"
          aria-valuenow={learningProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 overflow-hidden rounded-full bg-neutral-100"
        >
          <div className="h-full rounded-full bg-secondary-500" style={{ width: `${learningProgress}%` }} />
        </div>
      </FloatingCard>

      <FloatingCard className="absolute top-[63.5%] left-[-17.8%] hidden w-[258px] md:flex">
        <div>
          <p className="text-label-m font-medium">Happy Students</p>
          <p className="text-body-xs text-neutral-500">
            4.5 (240) <span className="text-amber-400" aria-hidden="true">★</span>
          </p>
        </div>
        <AvatarGroup avatars={happyStudents} more="2K+" />
      </FloatingCard>
    </div>
  );
}
