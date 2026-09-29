import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/data/partners";

// Figma "Frame 2": light grey strip (1440 × 202) with one row of logos,
// 80px above and below, 72px between logos.
//
// The row wraps on smaller screens (one line from 1024px, 3 + 2 on tablets, 2 + 2 + 1 on
// phones), so there's no JavaScript and no horizontal scroll. The 72px gap only fits
// from 1280px; below that it's 24px, which is what lets all five fit on one line at 1024px.
export function Partners() {
  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        {/* No visible heading in the design; this tells screen reader users what the logos are */}
        <h2 className="sr-only">Our partners</h2>

        <ul className="flex flex-wrap items-center justify-center gap-6 xl:gap-x-18">
          {partners.map((partner) => (
            <li key={partner.src}>
              {/* 32px tall on phones (width follows the aspect ratio from width/height).
                  From md up no size classes: the width/height attributes give the Figma size
                  and reserve the space before the SVG loads, so nothing jumps. */}
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="max-md:h-8 max-md:w-auto"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
