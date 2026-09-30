import { Footer } from "@/components/sections/footer/Footer";
import { Navbar } from "@/components/sections/navbar/Navbar";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
