import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/ui/SearchBar";
import { HeroVisual } from "./HeroVisual";

// Figma "Hero_Frame": 1440 × 1024, Persian Blue 800 with the 120px grid.
// The fixed navbar (app/layout.tsx) sits on top of it, so the top padding keeps the
// text below the navbar: text starts 169px from the top on desktop (pt-42 = 168px).
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary-800 bg-grid pt-32 md:pt-40 lg:pt-42">
      <Container className="flex flex-col items-center gap-10 text-center lg:gap-15">
        <div className="flex max-w-[935px] flex-col gap-4 lg:gap-8">
          <h1 className="text-heading-s tracking-[-0.01em] text-neutral-50 md:text-heading-m lg:text-heading-l">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-body-m text-neutral-100 md:text-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <SearchBar />
      </Container>

      <Container className="mt-10 lg:mt-0">
        <HeroVisual />
      </Container>

      {/* All 3D shapes, exported from Figma as one 1440-wide transparent PNG (top 221px).
          On top of the cards like in Figma; pointer-events-none so it never blocks clicks.
          Hidden on phones, where the shapes would land on the text. */}
      <Image
        src="/images/shapes/hero-ornaments.png"
        alt=""
        width={1440}
        height={804}
        sizes="1440px"
        // On desktop this is the largest image in view (the LCP), so don't lazy-load it
        loading="eager"
        className="pointer-events-none absolute top-[221px] left-1/2 hidden w-[1440px] max-w-none -translate-x-1/2 md:block"
      />
    </section>
  );
}
