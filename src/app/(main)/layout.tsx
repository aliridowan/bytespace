import { Footer } from "@/components/sections/footer/Footer";
import { Navbar } from "@/components/sections/navbar/Navbar";

// Main layout for the site pages: the navbar and footer are always present, the page content is in between.
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
