import { Courses } from "@/components/sections/courses/Courses";
import { CreatorCta } from "@/components/sections/cta/CreatorCta";
import { Growth } from "@/components/sections/growth/Growth";
import { Hero } from "@/components/sections/hero/Hero";
import { LearningPaths } from "@/components/sections/learning-paths/LearningPaths";
import { Partners } from "@/components/sections/partners/Partners";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";

// Landing page, sections in Figma order. The navbar (app/layout.tsx) scrolls to the
// sections with the ids "home", "courses" and "creators".

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Courses />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
    </main>
  );
}
