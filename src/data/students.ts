import type { Avatar } from "@/components/ui/AvatarGroup";

// Faces on every "Happy Students" card (Hero, "Create & Manage Courses", sign-in pages):
// the same seven people from Figma, left to right.
// alt="" = decorative: the card text already says "Happy Students", seven "Student" labels
// would be noise.
export const happyStudents: Avatar[] = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/images/avatars/auth/avatar-${n}.png`,
  alt: "",
}));

// "Learning Progress" cards (Hero and "Your Path to Professional Growth")
export const learningProgress = 55; // percent
