import React from "react";
import { TBreadCrumbs } from "@/types";
import StudioForm from "@/components/layout/studio/StudioForm";
import PageHeader from "@/components/ui/common/PageHeader";

function StudioCreatePage() {
  const breadcrumbData: TBreadCrumbs[] = [
    {
      id: 1,
      label: "Add Studio",
    },
  ];
  return (
    <>
      <PageHeader
        breadcrumbs={breadcrumbData}
        heading="Host your own studio"
        details="List your studio for renting, help creators produce amazing work."
      />
      <StudioForm />
    </>
  );
}

export default StudioCreatePage;
