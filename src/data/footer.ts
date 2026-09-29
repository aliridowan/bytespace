import type { NavLink } from "@/data/navigation";

// Footer link columns, in Figma order. Course and category links point to the course
// section; pages that don't exist yet (about, contact, ...) get their future routes.
export const footerColumns: NavLink[][] = [
  [
    { label: "Featured Courses", href: "/#courses" },
    { label: "Featured Categories", href: "/#courses" },
    { label: "Business", href: "/#courses" },
    { label: "IT", href: "/#courses" },
    { label: "Design", href: "/#courses" },
  ],
  [
    { label: "Development", href: "/#courses" },
    { label: "Marketing", href: "/#courses" },
    { label: "Photography", href: "/#courses" },
    { label: "Finance", href: "/#courses" },
    { label: "Sport", href: "/#courses" },
  ],
  [
    { label: "Become a Creator", href: "/#creators" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

// Bottom-right links next to the copyright
export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];
