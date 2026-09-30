"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { authLinks, mainLinks, sectionIds } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

// The panel stays in the DOM and animates between open and closed with a CSS transition,
// so both opening and closing are smooth. "invisible" (visibility: hidden) when closed also
// removes the links from keyboard focus and screen readers.
const panelStyles =
  "absolute inset-x-0 top-full z-50 border-t border-white/15 bg-primary-800 shadow-lg " +
  "transition-[opacity,translate,visibility] duration-200 ease-out motion-reduce:transition-none " +
  "data-[open=false]:invisible data-[open=false]:-translate-y-2 data-[open=false]:opacity-0";

const linkStyles =
  "block py-3 text-body-l text-neutral-50 hover:text-secondary-400";

// The only interactive part of the navbar, so the only part that needs "use client".
// Hidden from md (768px) up, where the full desktop navbar is shown instead.
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeId, selectSection } = useActiveSection(sectionIds, "home");

  // Close with the Escape key while the menu is open.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-10 items-center justify-center rounded-full text-neutral-50 focus-visible:outline-2 focus-visible:outline-neutral-50"
      >
        {/* lucide-react icons, 24px by default */}
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        data-open={isOpen}
        className={panelStyles}
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {mainLinks.map((link) => {
              const isActive = link.sectionId === activeId;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      closeMenu();
                      selectSection(link.sectionId);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={`${linkStyles} ${isActive ? "font-medium" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mt-2 flex flex-col border-t border-white/15 pt-2">
            {authLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={linkStyles}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </div>
  );
}
