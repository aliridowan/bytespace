import { Courses } from "@/components/sections/courses/Courses";
import { Hero } from "@/components/sections/hero/Hero";
import { LearningPaths } from "@/components/sections/learning-paths/LearningPaths";
import { Partners } from "@/components/sections/partners/Partners";

// Landing page. Sections are added one by one; each remaining placeholder has the id the navbar
// scroll-spy watches and will be replaced by the real section.
// The Navbar itself comes from app/layout.tsx.

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Courses />
      <LearningPaths />

      <section
        id="creators"
        className="flex min-h-screen items-center justify-center bg-primary-600"
      >
        <p className="text-heading-s text-neutral-50">
          Creator CTA (placeholder)
        </p>
      </section>
    </main>
  );
}
