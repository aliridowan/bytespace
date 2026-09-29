import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Scroll-spy: returns the id of the section that is currently in the middle of the screen.
 *
 * rootMargin "-50% 0px -50% 0px" shrinks the observed area to a single horizontal line
 * across the middle of the viewport, so only one section can cross it at a time.
 */
export function useActiveSection(sectionIds: string[], initialId: string) {
  // Start with initialId so the server HTML already shows the right link as active
  // (no jump once JavaScript loads).
  const [activeId, setActiveId] = useState(initialId);

  // True while the page smooth-scrolls after a nav link click. The observer is ignored
  // meanwhile, otherwise every section passed on the way would flash as active.
  const isScrollingToLink = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToLink.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    // Stop watching when the component unmounts.
    return () => observer.disconnect();
  }, [sectionIds]);

  // Call on nav link click: mark the target active right away and pause the observer
  // until the scroll ends. The timeout is a fallback for when no scroll happens (the
  // section is already in place) or the browser has no "scrollend" event.
  const selectSection = useCallback((id: string) => {
    setActiveId(id);
    isScrollingToLink.current = true;

    const release = () => {
      isScrollingToLink.current = false;
      window.removeEventListener("scrollend", release);
      clearTimeout(fallback);
    };
    const fallback = setTimeout(release, 1000);
    window.addEventListener("scrollend", release);
  }, []);

  return { activeId, selectSection };
}
