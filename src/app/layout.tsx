import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
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
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
