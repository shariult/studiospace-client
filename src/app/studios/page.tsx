import React from "react";
import StudioCard from "@/components/layout/studio/StudioCard";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import { studioIndex } from "@/lib/studioActions";
import { notFound } from "next/navigation";
import StudioIndexCategory from "@/components/layout/studio/StudioIndexCategory";
import StudioResetButton from "@/components/ui/studio/StudioResetButton";

type StudioIndexPageProps = {
  searchParams: Promise<{ category: string }>;
};

async function StudioIndexPage({ searchParams }: StudioIndexPageProps) {
  const { category } = await searchParams;
  const catQuery = category ? `/studio?category=${category}` : null;

  const res = await studioIndex(catQuery);
  if (!res.isSuccess) notFound();
  const studios = res.data;

  return (
    <Container>
      <div className="flex justify-between mb-4">
        <SectionTitle
          headingSub="List of Studios"
          heading="Explore Studios"
          className="pb-8"
        />
        <div className="flex flex-col gap-2 self-end">
          <StudioResetButton />
          <p className="text-muted text-sm">viewing {studios.length} studios</p>
        </div>
      </div>

      <StudioIndexCategory catQuery={category} />

      <div className="grid grid-cols-3 gap-6">
        {studios.map((item) => {
          return <StudioCard data={item} key={item._id} />;
        })}
      </div>
    </Container>
  );
}

export default StudioIndexPage;
