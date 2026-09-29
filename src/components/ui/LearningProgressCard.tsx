import { FloatingCard } from "@/components/ui/FloatingCard";

type LearningProgressCardProps = {
  value: number; // percent
  className?: string;
};

// "Learning Progress 55%" card floating over the student photos (Hero, Professional Growth).
// Figma: 232px wide, Body S label, big percentage, lime bar.
export function LearningProgressCard({ value, className = "" }: LearningProgressCardProps) {
  return (
    <FloatingCard className={`w-58 ${className}`}>
      <p className="text-body-s text-neutral-700">Learning Progress</p>
      <p className="font-heading text-heading-s font-semibold">{value}%</p>
      {/* role="progressbar" + aria-value* so screen readers announce it as progress, not a plain box */}
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 overflow-hidden rounded-full bg-neutral-100"
      >
        <div className="h-full rounded-full bg-secondary-500" style={{ width: `${value}%` }} />
      </div>
    </FloatingCard>
  );
}
