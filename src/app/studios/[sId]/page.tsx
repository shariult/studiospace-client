import React from "react";
import { notFound } from "next/navigation";
import StudioShowDetails from "@/components/layout/studio/StudioShowDetails";
import StudioShowHeader from "@/components/layout/studio/StudioShowHeader";
import StudioShowImage from "@/components/layout/studio/StudioShowImage";
import { studios } from "@/data/studios";
import Breadcrumbs from "@/components/ui/common/Breadcrumbs";

type StudioShowPageProps = {
  params: Promise<{ sId: string }>;
};

export async function generateMetadata({ params }: StudioShowPageProps) {
  const { sId } = await params;
  const data = studios.find((item) => item.id === sId);
  return {
    title: `${data?.title} | StudioSpace`,
    description: data?.overview,
  };
}

async function StudioShowPage({ params }: StudioShowPageProps) {
  const { sId } = await params;
  const studio = studios.find((item) => item.id === sId);
  if (!studio) notFound();

  const breadcrumbData = [
    {
      id: 1,
      label: studio.title,
    },
  ];

  return (
    <>
      <div className="max-w-330 mx-auto py-6">
        <Breadcrumbs data={breadcrumbData} />
      </div>
      <StudioShowHeader data={studio} />
      <StudioShowImage data={studio} />
      <StudioShowDetails data={studio} />
    </>
  );
}

export default StudioShowPage;
