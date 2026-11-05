import Hero from "@/components/layout/homepage/Hero";
import SectionAbout from "@/components/layout/homepage/SectionAbout";
import SectionCategories from "@/components/layout/homepage/SectionCategories";
import SectionFeatured from "@/components/layout/homepage/SectionFeatured";
import SectionSteps from "@/components/layout/homepage/SectionSteps";
import StudioGridSK from "@/components/layout/studio/StudioGridSK";
import { Suspense } from "react";

async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<StudioGridSK />}>
        <SectionFeatured />
      </Suspense>
      <SectionCategories />
      <SectionSteps />
      <SectionAbout />
    </>
  );
}

export default Home;
