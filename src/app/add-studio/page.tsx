import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TBreadCrumbs } from "@/types";
import StudioForm from "@/components/layout/studio/StudioForm";

function StudioCreatePage() {
  const breadcrumbs: TBreadCrumbs[] = [
    {
      id: 1,
      label: "Add Studio",
    },
  ];
  return (
    <>
      <SectionHeader
        breadcrumbs={breadcrumbs}
        heading="Host your own studio"
        details="List your studio for renting, help creators produce amazing work."
      />
      <StudioForm />
    </>
  );
}

export default StudioCreatePage;
