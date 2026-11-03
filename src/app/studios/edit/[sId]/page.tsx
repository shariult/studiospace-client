import React from "react";
import { TBreadCrumbs } from "@/types";
import PageHeader from "@/components/ui/common/PageHeader";
import StudioForm from "@/components/layout/studio/StudioForm";
import { studioShow } from "@/lib/studioActions";

type StudioEditPageProps = {
  params: Promise<{ sId: string }>;
};

async function StudioEditPage({ params }: StudioEditPageProps) {
  const { sId } = await params;
  const res = await studioShow(sId);

  if (res.isSuccess) {
    const data = res.data;
    const breadcrumbData: TBreadCrumbs[] = [
      {
        id: 1,
        label: data.title,
        slug: `/studios/${data._id}`,
      },
      {
        id: 2,
        label: "Edit",
      },
    ];
    return (
      <>
        <PageHeader
          breadcrumbs={breadcrumbData}
          heading="Update Studio"
          details="List your studio for renting, help creators produce amazing work."
        />
        <StudioForm type="update" studioData={data} />
      </>
    );
  }
}

export default StudioEditPage;
