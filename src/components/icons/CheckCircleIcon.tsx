// Filled circle with a white tick (24×24) for feature lists. The circle takes the
// parent's text colour through fill="currentColor".
export function CheckCircleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
