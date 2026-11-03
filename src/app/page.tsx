import Hero from "@/components/layout/homepage/Hero";
import SectionAbout from "@/components/layout/homepage/SectionAbout";
import SectionCategories from "@/components/layout/homepage/SectionCategories";
import SectionFeatured from "@/components/layout/homepage/SectionFeatured";
import SectionSteps from "@/components/layout/homepage/SectionSteps";
import { studioFeatured } from "@/lib/studioActions";

async function Home() {
  const featuredRes = await studioFeatured();

  return (
    <>
      <Hero />
      {featuredRes.isSuccess && featuredRes.data.length > 0 && (
        <SectionFeatured data={featuredRes.data} />
      )}
      <SectionCategories />
      <SectionSteps />
      <SectionAbout />
    </>
  );
}

export default Home;
