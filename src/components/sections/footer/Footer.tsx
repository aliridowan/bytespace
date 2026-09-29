import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerColumns, legalLinks } from "@/data/footer";
import { NewsletterForm } from "./NewsletterForm";

const linkStyles = "transition-colors hover:text-primary-600";

// Figma "Footer" (1440 × 525, white, 1px Shuttle Gray/200 line on top).
// Content 1200px wide, 71px from the top and 48px from the bottom:
//   left block (528) + 92px + link columns (3 × 167, 40px apart), then 130px down the
//   copyright row under its own divider.
// Rendered from app/layout.tsx, so every page gets it (like the Navbar).
export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white pt-16 pb-12 lg:pt-[71px]">
      <Container className="flex flex-col gap-16 lg:gap-[130px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-[92px]">
          {/* Logo + tagline (16px apart), 45px above the newsletter form. 528px wide like
              Figma (not just as wide as its text), shrinking if the row is narrower. */}
          <div className="flex max-w-[528px] flex-col gap-[45px] lg:w-[528px]">
            <div className="flex flex-col gap-4">
              <Link href="/#home" className="w-fit">
                <Image src="/logo-dark.svg" alt="ByteSpace" width={171} height={37} />
              </Link>
              <p className="text-body-s">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <NewsletterForm />
          </div>

          {/* Figma keeps an invisible 24px "Browse" title + 24px gap above the lists, so the
              links start 48px below the logo line (lg:pt-12). */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:w-[581px] lg:pt-12">
            {footerColumns.map((column) => (
              <ul key={column[0].label} className="flex flex-col gap-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={`text-body-s ${linkStyles}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Divider, then copyright and legal links 22px below (Figma "Copyright_Text", 42px) */}
        <div className="flex flex-col gap-4 border-t border-neutral-200 pt-[22px] text-body-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkStyles}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
