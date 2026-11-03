import React from "react";
import StudioCard from "@/components/layout/studio/StudioCard";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import { studioIndex } from "@/lib/studioActions";

async function StudioIndexPage() {
  const res = await studioIndex();
  const studios = res.isSuccess ? res.data : [];

  return (
    <Container>
      <div className="flex justify-between items-end pb-12">
        <SectionTitle headingSub="List of Studios" heading="Explore Studios" />
        <p className="text-muted text-sm">viewing {studios.length} studios</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {studios.map((item) => {
          return <StudioCard data={item} key={item._id} />;
        })}
      </div>
    </Container>
  );
}

export default StudioIndexPage;
