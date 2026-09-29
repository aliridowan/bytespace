import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths } from "@/data/learningPaths";

// "Explore Diverse Learning Paths" (Figma Frame 9 heading + Frame 10 cards).
//
// No top padding: in Figma the heading starts 72px below the course cards, and the
// courses section above already ends with 72px (py-18). 120px below the cards (pb-30).
export function LearningPaths() {
  return (
    <section className="pb-30">
      <Container>
        <SectionHeading
          size="s"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        {/* Figma: 6 square cards of 167px, 40px apart (6 × 167 + 5 × 40 = 1202).
            2 per row on phones, 3 on tablets, all 6 from 1024px (16px gaps until xl). */}
        <ul className="mt-17 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 xl:gap-10">
          {learningPaths.map((path) => (
            <li
              key={path.label}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 p-2 text-center"
            >
              {/* 60px lime circle: 12px padding around a 36px icon box, icon centred in it */}
              <span className="flex size-15 items-center justify-center rounded-full bg-secondary-400">
                <Image src={path.icon} alt="" width={path.width} height={path.height} />
              </span>
              <span className="text-label-xl font-medium">{path.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
