import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/sections/Navbar";
import "./globals.css";

// Headings: Poppins (Google Fonts, not a variable font, so weights are listed)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Body: Satoshi (Fontshare, self-hosted variable font covering 300–900)
const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace – Learn, Create and Grow",
  description:
    "Explore hundreds of courses from expert creators, learn new skills and share your own expertise on ByteSpace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // motion-safe:scroll-smooth – smooth scrolling to #sections, skipped for "reduce motion" users.
    // data-scroll-behavior="smooth" – Next.js 16: turn smooth scrolling off during page
    //   navigations, so a new page starts at the top without an animated scroll.
    // scroll-pt-* – leave room for the fixed navbar when jumping to a section, so its top
    //   isn't hidden under the header. Uses the scrolled height (64px mobile, 80px desktop)
    //   because the header has already shrunk by the time the section is reached.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${satoshi.variable} scroll-pt-16 motion-safe:scroll-smooth md:scroll-pt-20`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
