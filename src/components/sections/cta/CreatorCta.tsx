import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

// 3D shapes around the CTA (Figma "Group 6"). Each PNG was exported as the part that is
// visible inside the 1440 × 488 frame, so the cut-off shapes are already cut. Left-side
// shapes are placed from the left edge and right-side ones from the right edge, so they
// stay on the screen edges at any width. The two lime squiggles reuse one PNG.
const shapes = [
  { src: "/images/shapes/squiggle-lime.png", width: 385, height: 383, className: "-top-[162px] -left-[118px] rotate-[30deg]" },
  { src: "/images/shapes/squiggle-white.png", width: 177, height: 176, className: "top-[5px] left-[178px]" },
  { src: "/images/shapes/cone-white.png", width: 140, height: 189, className: "top-[225px] left-0" },
  { src: "/images/shapes/torus-lime.png", width: 346, height: 190, className: "bottom-0 left-[18px]" },
  { src: "/images/shapes/cone-lime.png", width: 190, height: 189, className: "top-0 right-[170px]" },
  { src: "/images/shapes/cylinder-white.png", width: 218, height: 372, className: "top-[5px] right-0" },
  { src: "/images/shapes/squiggle-lime.png", width: 330, height: 328, className: "top-[289px] right-0" },
];

// Figma "CTA_Frame": 1440 × 488, Persian Blue 800 with the 120px grid, centred content
// (Heading M title, Body L text, "Join as Creator" button, 40px apart).
// id="creators" is the navbar's "Creators" link target.
export function CreatorCta() {
  return (
    <section id="creators" className="relative overflow-hidden bg-primary-800 bg-grid py-21">
      {/* Behind the text and only from xl: on narrower screens the shapes would sit on the paragraph */}
      {shapes.map((shape) => (
        <Image
          key={shape.className}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className={`pointer-events-none absolute hidden max-w-none xl:block ${shape.className}`}
        />
      ))}

      <Container className="relative flex flex-col items-center gap-10 text-center">
        <h2 className="max-w-[710px] text-heading-s tracking-[-0.01em] text-neutral-50 md:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] text-body-m text-neutral-50 md:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href="/sign-up">Join as Creator</Button>
      </Container>
    </section>
  );
}
