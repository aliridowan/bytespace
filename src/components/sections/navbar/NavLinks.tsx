"use client";

import Link from "next/link";
import { mainLinks, sectionIds } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

// "block" gives each link its own box, so its line-height decides its height.
const baseStyles = "block text-neutral-50 transition-colors hover:text-secondary-400";

// Figma: the active link uses Label M (16px, 120% line-height, Medium) and the others
// Body M (16px, 160%, Regular). With the list aligned to the top, the shorter active
// line box sits ~3.5px higher — exactly as in the design.
const activeStyles = "text-label-m font-medium";
const inactiveStyles = "text-body-m";

export function NavLinks() {
  const { activeId, selectSection } = useActiveSection(sectionIds, "home");

  return (
    <ul className="flex items-start gap-6">
      {mainLinks.map((link) => {
        const isActive = link.sectionId === activeId;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => selectSection(link.sectionId)}
              aria-current={isActive ? "true" : undefined}
              className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
