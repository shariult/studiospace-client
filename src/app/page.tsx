import Hero from "@/components/layout/homepage/Hero";
import SectionCategories from "@/components/layout/homepage/SectionCategories";
import SectionFeatured from "@/components/layout/homepage/SectionFeatured";
import SectionSteps from "@/components/layout/homepage/SectionSteps";

async function Home() {
  return (
    <>
      <Hero />
      <SectionFeatured />
      <SectionCategories />
      <SectionSteps />
    </>
  );
}

export default Home;
