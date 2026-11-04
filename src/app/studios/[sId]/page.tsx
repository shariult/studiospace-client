import React from "react";
import { notFound } from "next/navigation";
import StudioShowDetails from "@/components/layout/studio/StudioShowDetails";
import StudioShowHeader from "@/components/layout/studio/StudioShowHeader";
import StudioShowImage from "@/components/layout/studio/StudioShowImage";
import { studios } from "@/data/studios";
import Breadcrumbs from "@/components/ui/common/Breadcrumbs";
import { studioShow } from "@/lib/studioActions";
import { userShow } from "@/lib/userActions";

type StudioShowPageProps = {
  params: Promise<{ sId: string }>;
};

export async function generateMetadata({ params }: StudioShowPageProps) {
  const { sId } = await params;
  const res = await studioShow(sId);
  if (res.isSuccess) {
    const data = res.data;
    return {
      title: `${data?.title} | StudioSpace`,
      description: data?.overview,
    };
  }
}

async function StudioShowPage({ params }: StudioShowPageProps) {
  const { sId } = await params;
  const res = await studioShow(sId);
  if (!res.isSuccess) notFound();

  const studio = res.data;

  const userRes = await userShow(studio.userId);
  if (!userRes.isSuccess) notFound();
  const host = userRes.data;

  const breadcrumbData = [
    {
      id: 1,
      label: studio.title,
    },
  ];

  return (
    <>
      <div className="max-w-330 mx-auto p-6">
        <Breadcrumbs data={breadcrumbData} />
      </div>
      <StudioShowHeader data={studio} />
      <StudioShowImage data={studio} />
      <StudioShowDetails data={studio} host={host} />
    </>
  );
}

export default StudioShowPage;
