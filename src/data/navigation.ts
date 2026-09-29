export type NavLink = {
  label: string;
  href: string;
};

// A centre link also knows which page section it points to, for scroll-spy.
export type SectionNavLink = NavLink & {
  sectionId: string;
};

// Centre links of the navbar. "/#id" scrolls to the section on the home page and
// also works from any other page (it navigates home first).
export const mainLinks: SectionNavLink[] = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Courses", href: "/#courses", sectionId: "courses" },
  { label: "Creators", href: "/#creators", sectionId: "creators" },
];

// Section ids watched by the scroll-spy. Defined once here so the array keeps
// the same identity between renders (a new array would restart the observer).
export const sectionIds = mainLinks.map((link) => link.sectionId);

// Right-hand account links. The pages come later (bonus task).
export const authLinks: NavLink[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];
