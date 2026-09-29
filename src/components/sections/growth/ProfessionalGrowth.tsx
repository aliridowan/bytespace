import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { LearningProgressCard } from "@/components/ui/LearningProgressCard";
import { courses } from "@/data/courses";
import { growthStats } from "@/data/growth";
import { learningProgress } from "@/data/students";

// Figma "Frame 13": text (574px) + 63px gap + picture (Frame 11, 621 × 552) = 1258px.
// That is 58px wider than the 1200px container, so the row only takes those extra 58px
// on screens wide enough for them (1400px+); on 1280px the text column gives them up.
// Below xl the text sits on top of the picture.
export function ProfessionalGrowth() {
  return (
    <section className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[63px] min-[1400px]:-mr-[58px]">
      <div className="flex max-w-[574px] flex-col items-center gap-10 text-center xl:items-start xl:text-left">
        <h2 className="text-heading-s tracking-[-0.01em] md:text-heading-m">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="max-w-[477px] text-body-l text-neutral-700">
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>

        {/* A description list: the label is the term, the number its value. flex-col-reverse
            shows the number on top as in Figma, while screen readers hear "Students, 12K". */}
        <dl className="flex gap-14">
          {growthStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-body-l text-neutral-700">{stat.label}</dt>
              <dd className="font-heading text-display-xs font-medium tracking-[-0.01em] text-primary-800">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <GrowthPicture />
    </section>
  );
}

// Figma "Frame 11" (621 × 552). Layers from back to front: course card, student photo,
// progress card, lime squiggle. Positions are % of the box so the photo scales on phones;
// the cards only appear from md, where the box is its full 621px.
function GrowthPicture() {
  return (
    <div className="relative aspect-[621/552] w-full max-w-[621px] shrink-0">
      <div className="absolute top-0 left-0 hidden w-[373px] md:block">
        <CourseCard course={courses[0]} />
      </div>

      <Image
        src="/images/sections/student-laptop.png"
        alt="Student with headphones holding a laptop"
        width={577}
        height={540}
        sizes="(min-width: 768px) 577px, 93vw"
        className="absolute top-[2.17%] left-0 h-auto w-[92.9%]"
      />

      <LearningProgressCard
        value={learningProgress}
        className="absolute top-[38.6%] left-[55.6%] hidden md:flex"
      />

      <Image
        src="/images/shapes/squiggle-lime.png"
        alt=""
        width={217}
        height={216}
        className="pointer-events-none absolute top-[12.1%] left-[65.4%] h-auto w-[34.6%]"
      />
    </div>
  );
}
