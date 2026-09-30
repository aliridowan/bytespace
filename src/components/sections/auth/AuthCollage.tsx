import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { courses } from "@/data/courses";

// The two cards shown in the collage, back one first.
const cardSlugs = ["build-digital-asset", "the-power-of-big-data"];
const cards = cardSlugs.map((slug) =>
  courses.find((course) => course.slug === slug)!,
);

// Card positions, in the same order as cardSlugs.
const cardPositions = ["top-[89px] left-[25px]", "top-0 left-[136px]"];

// 3D shapes drawn over the cards, in Figma's layer order (the last one is on top).
const shapes = [
  {
    src: "/images/shapes/squiggle-white.png",
    width: 175,
    height: 174,
    className: "top-[321px] left-[373px]",
  },
  {
    src: "/images/auth/torus-lime-full.png",
    width: 146,
    height: 145,
    className: "top-[15px] left-[54px]",
  },
  {
    src: "/images/shapes/cone-lime.png",
    width: 188,
    height: 187,
    className: "top-[391px] left-0",
  },
];

type AuthCollageProps = {
  className?: string;
};

export function AuthCollage({ className = "relative" }: AuthCollageProps) {
  return (
    <div aria-hidden="true" className={`h-[585px] w-[548px] ${className}`}>
      {cards.map((course, index) => (
        <div
          key={course.slug}
          className={`absolute w-[373px] ${cardPositions[index]}`}
        >
          {/* eager: these photos are the biggest image above the fold (the page's LCP) */}
          <CourseCard course={course} variant="auth" eager />
        </div>
      ))}

      <HappyStudentsCard
        rating={4.5}
        reviews={240}
        variant="auth"
        className="absolute top-[435px] left-[251px]"
      />

      {shapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className={`pointer-events-none absolute ${shape.className}`}
        />
      ))}
    </div>
  );
}
