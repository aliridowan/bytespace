import { Container } from "@/components/ui/Container";
import { CreateCourses } from "./CreateCourses";
import { ProfessionalGrowth } from "./ProfessionalGrowth";

// Figma "Frame 15" (1440 × 1460, #FAFAFA): two rows that share one soft background,
// 120px padding top and bottom, 72px between the rows.
//
// The background is five big blurred circles in Figma (blue #003BE2 and lime #CBFC01,
// each fading out). Here they are radial gradients on the same element, placed at the
// circles' centres in % of the Figma frame, so no extra elements or images are needed.
const blobs = [
  "radial-gradient(circle 570px at 28.9% 7%, rgb(203 252 1 / 0.3), transparent)", // lime, top left
  "radial-gradient(circle 570px at 95.8% 7.5%, rgb(0 59 226 / 0.08), transparent)", // blue, top right
  "radial-gradient(circle 570px at 4.2% 51.4%, rgb(0 59 226 / 0.08), transparent)", // blue, left
  "radial-gradient(circle 336px at 3.4% 87.8%, rgb(203 252 1 / 0.3), transparent)", // lime, bottom left
  "radial-gradient(circle 570px at 89.6% 92.9%, rgb(0 59 226 / 0.1), transparent)", // blue, bottom right
].join(", ");

export function Growth() {
  return (
    <div className="overflow-hidden bg-[#FAFAFA] py-20 xl:py-30" style={{ backgroundImage: blobs }}>
      <Container className="flex flex-col gap-18">
        <ProfessionalGrowth />
        <CreateCourses />
      </Container>
    </div>
  );
}
