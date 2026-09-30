import { SmallStarIcon } from "@/components/icons/SmallStarIcon";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { happyStudents } from "@/data/students";

type HappyStudentsCardProps = {
  rating: number;
  reviews: number;
  // Only the colours change (Figma): "default" = white card, lime star and lime badge
  // (landing page); "auth" = lime card, blue star and black badge (sign-in pages).
  variant?: "default" | "auth";
  className?: string;
};

// "Happy Students" card with a rating and a row of faces (Hero, Create & Manage Courses,
// sign-in pages). Figma: 258 × 121 with the same seven 43px faces + "2K+" on every one;
// the rating and review count come from the caller.
export function HappyStudentsCard({
  rating,
  reviews,
  variant = "default",
  className = "",
}: HappyStudentsCardProps) {
  const isAuth = variant === "auth";

  return (
    <FloatingCard
      tone={isAuth ? "lime" : "white"}
      className={`w-[258px] ${className}`}
    >
      <div>
        <p className="text-label-m font-medium">Happy Students</p>
        <p className="flex items-center gap-1 text-body-xs text-neutral-500">
          {rating} ({reviews})
          <SmallStarIcon
            className={isAuth ? "text-primary-800" : "text-secondary-400"}
          />
        </p>
      </div>
      <AvatarGroup
        avatars={happyStudents}
        more="2K+"
        moreTone={isAuth ? "dark" : "lime"}
        size="lg"
      />
    </FloatingCard>
  );
}
