type SectionHeadingProps = {
  title: React.ReactNode;
  description?: string;
  // Figma uses two title sizes: Heading M (44px, "Discover Your Passion") and
  // Heading S (36px, "Explore Diverse Learning Paths"). Both are 36px on phones.
  size?: "m" | "s";
  className?: string;
};

const titleSizes = {
  m: "text-heading-s md:text-heading-m",
  s: "text-heading-s",
};

// Centred title + intro text used at the top of most landing page sections.
// Figma: -1% letter spacing, Body L intro in Shuttle Gray/400, 16px apart, max 917px wide.
export function SectionHeading({ title, description, size = "m", className = "" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto flex max-w-[917px] flex-col gap-4 text-center ${className}`}>
      <h2 className={`tracking-[-0.01em] ${titleSizes[size]}`}>{title}</h2>
      {description && <p className="text-body-m text-neutral-400 md:text-body-l">{description}</p>}
    </div>
  );
}
