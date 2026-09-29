type FloatingCardProps = {
  children: React.ReactNode;
  className?: string;
};

// Small white info card that floats over an image (Hero stat cards, Create section "Revenue").
// Figma: white fill, 16px radius, 16px padding, 8px gap between rows.
// Position and width come from the caller through className.
export function FloatingCard({ children, className = "" }: FloatingCardProps) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg ${className}`}>
      {children}
    </div>
  );
}
