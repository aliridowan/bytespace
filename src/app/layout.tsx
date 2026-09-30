import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

// Headings: Poppins Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Body: Satoshi Fonts
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${satoshi.variable} scroll-pt-16 motion-safe:scroll-smooth md:scroll-pt-20`}
    >
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
