// Magnifying glass icon (outline, 24×24).
// stroke="currentColor" makes it take the text colour of its parent.
export function SearchIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20L16.2 16.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
