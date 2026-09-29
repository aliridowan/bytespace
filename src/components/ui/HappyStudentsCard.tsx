import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { happyStudents } from "@/data/students";

type HappyStudentsCardProps = {
  rating: number;
  reviews: number;
  className?: string;
};

// "Happy Students" card with a rating and a row of faces (Hero, Create & Manage Courses).
// Figma: 258px wide, the rating differs per section (4.5 in the Hero, 4.8 lower down).
export function HappyStudentsCard({ rating, reviews, className = "" }: HappyStudentsCardProps) {
  return (
    <FloatingCard className={`w-[258px] ${className}`}>
      <div>
        <p className="text-label-m font-medium">Happy Students</p>
        <p className="text-body-xs text-neutral-500">
          {rating} ({reviews}) <span className="text-amber-400" aria-hidden="true">★</span>
        </p>
      </div>
      <AvatarGroup avatars={happyStudents} more="2K+" />
    </FloatingCard>
  );
}
