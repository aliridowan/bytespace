import type { Metadata } from "next";
import { Footer } from "@/components/sections/footer/Footer";
import { Navbar } from "@/components/sections/navbar/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found – ByteSpace",
};

const numberGradient = {
  backgroundImage:
    "linear-gradient(to bottom, #d4fb20 0%, rgb(212 251 32 / 0.96) 25%, rgb(212 251 32 / 0.81) 50%, rgb(212 251 32 / 0.61) 75%, rgb(255 255 255 / 0) 100%)",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="overflow-hidden bg-primary-800 bg-grid pt-32 pb-20 lg:pt-40 lg:pb-[125px]">
          <Container className="flex flex-col items-center gap-8 text-center">
            <p
              aria-hidden="true"
              style={numberGradient}
              className="mb-[calc(-0.248em-2rem)] bg-clip-text font-heading text-[clamp(8rem,33.3vw,30rem)] leading-none font-semibold tracking-[-0.01em] text-transparent select-none"
            >
              404
            </p>

            <h1 className="relative max-w-[935px] text-heading-s tracking-[-0.01em] text-white md:text-heading-m lg:text-heading-l">
              The page you are looking for doesn’t exist
            </h1>
            <p className="text-body-m text-neutral-100 md:text-body-l">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Button href="/">Back to Home</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
