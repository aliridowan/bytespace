// white: Hero stat cards, Create section. lime: sign-in collage (Figma: Electric Lime 400
// with a 20px background blur and no shadow).
const toneStyles = {
  white: "bg-white shadow-lg",
  lime: "bg-secondary-400 backdrop-blur-[20px]",
};

type FloatingCardProps = {
  children: React.ReactNode;
  tone?: keyof typeof toneStyles;
  className?: string;
};

// Small info card that floats over an image (Hero stat cards, Create section "Revenue").
// Figma: 16px radius, 16px padding, 8px gap between rows.
// Position and width come from the caller through className.
export function FloatingCard({ children, tone = "white", className = "" }: FloatingCardProps) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl p-4 ${toneStyles[tone]} ${className}`}>
      {children}
    </div>
  );
}
