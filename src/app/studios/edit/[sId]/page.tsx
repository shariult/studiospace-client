import React from "react";
import { TBreadCrumbs } from "@/types";
import PageHeader from "@/components/ui/common/PageHeader";
import StudioForm from "@/components/layout/studio/StudioForm";

function StudioEditPage() {
  const breadcrumbData: TBreadCrumbs[] = [
    {
      id: 1,
      label: "Update Studio",
    },
  ];
  return (
    <>
      <PageHeader
        breadcrumbs={breadcrumbData}
        heading="Update Studio"
        details="List your studio for renting, help creators produce amazing work."
      />
      <StudioForm />
    </>
  );
}

export default StudioEditPage;
