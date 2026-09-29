export type LearningPath = {
  label: string;
  icon: string;
  // The SVGs' own sizes from Figma; they differ per icon (all fit a 36px box)
  width: number;
  height: number;
};

// Category cards under "Explore Diverse Learning Paths", in Figma order.
export const learningPaths: LearningPath[] = [
  { label: "Design", icon: "/icons/categories/design.svg", width: 27, height: 27 },
  { label: "Development", icon: "/icons/categories/development.svg", width: 24, height: 33 },
  { label: "IT & Software", icon: "/icons/categories/it-software.svg", width: 36, height: 24 },
  { label: "Business", icon: "/icons/categories/business.svg", width: 30, height: 27 },
  { label: "Marketing", icon: "/icons/categories/marketing.svg", width: 30, height: 30 },
  { label: "Photography", icon: "/icons/categories/photography.svg", width: 30, height: 27 },
];
