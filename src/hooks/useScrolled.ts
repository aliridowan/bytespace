import { useEffect, useState } from "react";

/** Returns true once the page has been scrolled past `threshold` pixels. */
export function useScrolled(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > threshold);
    }

    handleScroll(); // the page may already be scrolled on load (e.g. after a refresh)

    // passive: tells the browser this listener never blocks scrolling
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
