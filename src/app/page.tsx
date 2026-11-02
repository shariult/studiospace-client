import Hero from "@/components/layout/homepage/Hero";
import SectionCategories from "@/components/layout/homepage/SectionCategories";
import SectionFeatured from "@/components/layout/homepage/SectionFeatured";

async function Home() {
  return (
    <>
      <Hero />
      <SectionFeatured />
      <SectionCategories />
    </>
  );
}

export default Home;
