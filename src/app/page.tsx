import { Hero } from "@/components/sections/hero/Hero";
import { Partners } from "@/components/sections/partners/Partners";

// Landing page. Sections are added one by one; each remaining placeholder has the id the navbar
// scroll-spy watches and will be replaced by the real section.
// The Navbar itself comes from app/layout.tsx.

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />

      <section
        id="courses"
        className="flex min-h-screen items-center justify-center bg-white"
      >
        <p className="text-heading-s">Discover Your Passion (placeholder)</p>
      </section>

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
