import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@/components/icons/CartIcon";
import { Container } from "@/components/ui/Container";
import { authLinks } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { StickyHeader } from "./StickyHeader";

const linkStyles =
  "text-body-m text-neutral-50 transition-colors hover:text-secondary-400";

export function Navbar() {
  return (
    // Sticky wrapper (Client Component). Everything inside is still rendered on the server.
    <StickyHeader>
      {/* Height: 80px / 120px at the top (Figma), 64px / 80px once scrolled */}
      <Container className="flex h-20 items-center justify-between transition-[height] duration-300 group-data-[scrolled=true]:h-16 motion-reduce:transition-none md:h-30 md:group-data-[scrolled=true]:h-20">
        <Link href="/#home">
          <Image
            src="/logo-white.svg"
            alt="ByteSpace"
            width={171}
            height={37}
            preload
          />
        </Link>

        {/* Server-rendered wrapper; only the link list inside is a Client Component */}
        <nav aria-label="Main" className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {authLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkStyles}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/cart"
            aria-label="Cart"
            className="text-neutral-50 transition-colors hover:text-secondary-400"
          >
            <CartIcon />
          </Link>

          <MobileMenu />
        </div>
      </Container>
    </StickyHeader>
  );
}
