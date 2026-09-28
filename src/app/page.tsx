// Preview page while the sections are being built.
// Each placeholder has the id the navbar scroll-spy watches and will be replaced by the real section.
// The Navbar itself comes from app/layout.tsx.

export default function Home() {
  return (
    <main>
      {/* The fixed navbar overlaps the top of the hero; pt keeps the content below it (80px / 120px) */}
      <section id="home" className="min-h-screen bg-primary-600 pt-20 md:pt-30">
        <p className="py-40 text-center text-heading-s text-neutral-50">
          Hero (placeholder)
        </p>
      </section>

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
