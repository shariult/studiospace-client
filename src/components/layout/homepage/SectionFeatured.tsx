import React, { ComponentPropsWithoutRef, Suspense } from "react";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import StudioCard from "../studio/StudioCard";
import { studioFeatured } from "@/lib/studioActions";
import EmptyData from "@/components/ui/common/EmptyData";

type SectionFeaturedProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

async function SectionFeatured(props: SectionFeaturedProps) {
  const featuredRes = await studioFeatured();
  const { className, ...rest } = props;

  return (
    <>
      {(!featuredRes.isSuccess || featuredRes.data.length <= 0) && (
        <EmptyData
          className="bg-gray-300 dark:bg-gray-700 my-8"
          message="No studio data found!"
          hideBtn
        />
      )}

      {featuredRes.isSuccess && featuredRes.data.length > 0 && (
        <Container className="bg-gray-100 dark:bg-gray-900" {...rest}>
          <SectionTitle
            heading="Featured Studios"
            headingSub="Studio spaces"
            headingText="Top-rated spaces creators love right now."
            className="mb-12"
          >
            <div className="btn-box">
              <Link
                href={"/studios"}
                className="btn-fill-primary btn-sm flex items-center"
              >
                All Studios <PiArrowRightBold />
              </Link>
            </div>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRes.data.map((item) => {
              return <StudioCard data={item} key={item._id} />;
            })}
          </div>
        </Container>
      )}
    </>
  );
}

export default SectionFeatured;
