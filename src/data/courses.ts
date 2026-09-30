import type { Avatar } from "@/components/ui/AvatarGroup";

export type Course = {
  slug: string;
  title: string;
  image: string;
  author: string;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  price: number;
  // Faces of a few enrolled students + the rest as a count
  students: Avatar[];
  moreStudents: string;
  categories: string[];
};

// Category filters of the "Discover Your Passion" section, in Figma order.
// "Featured" is the default and shows every course.
export const FEATURED = "Featured";

// Split into Figma's three rows (1086px, 952px and 622px wide with "+ More"). From 1280px
// the chips are shown in exactly these rows; on smaller screens they simply wrap or scroll.
export const courseCategoryRows = [
  [FEATURED, "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

// Same four faces on every card in the design. alt="" because the "26+" count says
// what the group means; the faces themselves add nothing for a screen reader.
const enrolled: Avatar[] = [1, 2, 3, 4].map((n) => ({
  src: `/images/avatars/avatar-${n}.png`,
  alt: "",
}));

// The six courses shown in Figma. Lessons, duration, rating, price and author are the
// same on every card in the design. Categories are my own guess, so the filters have
// something to filter; Figma doesn't say which course belongs where.
const shared = {
  author: "purepearl studio",
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  price: 25,
  students: enrolled,
  moreStudents: "26+",
};

export const courses: Course[] = [
  {
    ...shared,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/images/courses/learn-figma.jpg",
    categories: ["UI/UX Design", "Graphic Design"],
  },
  {
    ...shared,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/digital-asset.jpg",
    categories: ["Digital Illustration", "Graphic Design"],
  },
  {
    ...shared,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: "/images/courses/big-data.jpg",
    categories: ["Data Science"],
  },
  {
    ...shared,
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/productivity.jpg",
    categories: ["Productivity"],
  },
  {
    ...shared,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/images/courses/money-management.jpg",
    categories: ["Freelance & Entrepreneurship"],
  },
  {
    ...shared,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.jpg",
    categories: ["Freelance & Entrepreneurship", "Marketing"],
  },
];
