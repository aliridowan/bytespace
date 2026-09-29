// Three rising bars for the course level badge ("Beginner"), 20×20.
export function LevelIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M5 15v-3M10 15V9M15 15V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
