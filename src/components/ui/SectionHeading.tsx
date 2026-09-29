type SectionHeadingProps = {
  title: React.ReactNode;
  description?: string;
  className?: string;
};

// Centred title + intro text used at the top of most landing page sections.
// Figma: Heading M (44px, -1% letter spacing), Body L below it, 16px apart, max 917px wide.
export function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto flex max-w-[917px] flex-col gap-4 text-center ${className}`}>
      <h2 className="text-heading-s tracking-[-0.01em] md:text-heading-m">{title}</h2>
      {description && <p className="text-body-m text-neutral-500 md:text-body-l">{description}</p>}
    </div>
  );
}
