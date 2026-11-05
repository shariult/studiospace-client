import React from "react";
import StudioCard from "@/components/layout/studio/StudioCard";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import { studioIndex } from "@/lib/studioActions";
import { notFound } from "next/navigation";
import StudioIndexCategory from "@/components/layout/studio/StudioIndexCategory";
import StudioResetButton from "@/components/ui/studio/StudioResetButton";
import { getCurrentUser } from "@/lib/authActions";
import EmptyData from "@/components/ui/common/EmptyData";
import StudioSearchForm from "@/components/layout/studio/StudioSearchForm";
import Breadcrumbs from "@/components/ui/common/Breadcrumbs";

type StudioIndexPageProps = {
  searchParams: Promise<{ category: string; search: string }>;
};

async function StudioIndexPage({ searchParams }: StudioIndexPageProps) {
  const { category, search } = await searchParams;

  const params = new URLSearchParams();
  if (category) {
    params.set("category", category);
  }
  if (search?.trim()) {
    params.set("search", search.trim());
  }
  const queryString = params.toString();
  const url = queryString ? `/studio?${queryString}` : null;

  const session = await getCurrentUser();
  const res = await studioIndex(url);
  if (!res.isSuccess) notFound();
  const studios = res.data;

  const breadcrumbData = [
    {
      id: 1,
      label: "All Studios",
    },
  ];

  return (
    <>
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
          <div className="flex flex-col gap-2 self-end">
            {session && <StudioResetButton />}
            <p className="text-muted text-sm">
              viewing {studios.length} studios
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-between mb-12">
          <StudioSearchForm searchQuery={search} catQuery={category} />
          <StudioIndexCategory searchQuery={search} catQuery={category} />
        </div>

        {studios.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studios.map((item) => {
              return <StudioCard data={item} key={item._id} />;
            })}
          </div>
        )}

        {studios.length <= 0 && <EmptyData message="No Studio found!" />}
      </Container>
    </>
  );
}

export default StudioIndexPage;
