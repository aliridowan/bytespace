// Hamburger (☰) icon for the mobile menu button. Not in Figma, drawn to match the 24px cart icon.
export function MenuIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
