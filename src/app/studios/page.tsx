import StudioCard from "@/components/layout/studio/StudioCard";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import { studios } from "@/data/studios";
import React from "react";

function StudioIndexPage() {
  return (
    <Container>
      <div className="flex justify-between items-end pb-12">
        <SectionTitle headingSub="List of Studios" heading="Explore Studios" />
        <p className="text-muted text-sm">viewing {studios.length} studios</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {studios.map((item) => {
          return <StudioCard data={item} key={item.id} />;
        })}
      </div>
    </Container>
  );
}

export default StudioIndexPage;
