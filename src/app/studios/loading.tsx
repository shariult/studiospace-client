import StudioGridSK from "@/components/layout/studio/StudioGridSK";
import StudioIndexCategory from "@/components/layout/studio/StudioIndexCategory";
import StudioSearchForm from "@/components/layout/studio/StudioSearchForm";
import Breadcrumbs from "@/components/ui/common/Breadcrumbs";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import React from "react";

function StudioLoading() {
  const breadcrumbData = [
    {
      id: 1,
      label: "All Studios",
    },
  ];
  return (
    <div className="">
      <div className="max-w-330 mx-auto p-6">
        <Breadcrumbs data={breadcrumbData} />
      </div>
      <Container>
        <div className="flex justify-between mb-4">
          <SectionTitle
            headingSub="List of Studios"
            heading="Explore Studios"
            className="pb-6"
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-between mb-12">
          <div className="w-full h-20 skeleton"></div>
          <div className="w-full h-12 skeleton"></div>
        </div>

        <StudioGridSK />
      </Container>
    </div>
  );
}

export default StudioLoading;
