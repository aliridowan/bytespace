import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

// Soft background like the Growth section: Figma "Ellipse 8, 11, 12" (blue #003BE2 and
// lime #CBFC01 circles fading out), as radial gradients at their centres in % of the
// 1440 × 784 frame.
const blobs = [
  "radial-gradient(circle 570px at 8.8% 91.5%, rgb(0 59 226 / 0.1), transparent)", // blue, bottom left
  "radial-gradient(circle 336px at 50.8% 25.3%, rgb(203 252 1 / 0.3), transparent)", // lime, top middle
  "radial-gradient(circle 570px at 98% 41.8%, rgb(203 252 1 / 0.3), transparent)", // lime, right
].join(", ");

// Figma "Testimonials_Frame" (1440 × 784, #FAFAFA): title + intro side by side (577 + 43 +
// 580), then three cards 41px apart, 72px below. Content starts 74px from the top and ends
// 57px from the bottom.
export function Testimonials() {
  return (
    <section className="bg-[#FAFAFA] pt-[74px] pb-[57px]" style={{ backgroundImage: blobs }}>
      <Container className="flex flex-col gap-18">
        <div className="flex flex-col items-center gap-6 text-center xl:flex-row xl:justify-between xl:gap-[43px] xl:text-left">
          <h2 className="max-w-[577px] text-heading-s tracking-[-0.01em] md:text-heading-m">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-body-m text-neutral-700 md:text-body-l">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Wrapping flex row, not a grid: on tablets (2 per row) the third card is centred
            instead of sitting alone on the left. items-start keeps each card's own height
            (Figma "Hug"). Widths: 1 / 2 / 3 per row, minus the gaps. */}
        <ul className="flex flex-wrap items-start justify-center gap-10 xl:gap-[41px]">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name} className="w-full md:w-[calc((100%-40px)/2)] xl:w-[calc((100%-82px)/3)]">
              {/* figure + blockquote + figcaption: the standard markup for a quote and who said it */}
              <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
                {/* alt="" because the name is right below the photo */}
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="size-20 rounded-full object-cover"
                />
                <figcaption>
                  <p className="font-heading text-heading-xs font-semibold tracking-[-0.01em]">
                    {testimonial.name}
                  </p>
                  <p className="text-body-l text-primary-800">{testimonial.role}</p>
                </figcaption>
                <blockquote className="text-body-l text-neutral-700">
                  <p>&quot;{testimonial.quote}&quot;</p>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
