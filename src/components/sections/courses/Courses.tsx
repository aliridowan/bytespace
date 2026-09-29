import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseBrowser } from "./CourseBrowser";

// "Discover Your Passion": heading, category chips and the course grid.
// Figma: 72px above the heading and below the cards. id="courses" is the navbar's scroll target.
export function Courses() {
  return (
    <section id="courses" className="py-18">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion, <br className="max-sm:hidden" />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        <CourseBrowser />
      </Container>
    </section>
  );
}
