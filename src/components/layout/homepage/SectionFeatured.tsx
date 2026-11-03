import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import StudioCard from "../studio/StudioCard";
import { TStudio } from "@/types";

type SectionFeaturedProps = {
  data: TStudio[];
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionFeatured(props: SectionFeaturedProps) {
  const { data, className, ...rest } = props;

  return (
    <Container className="bg-gray-100" {...rest}>
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
            View All Studios <PiArrowRightBold />
          </Link>
        </div>
      </SectionTitle>

      <div className="grid grid-cols-3 gap-6">
        {data.slice(0, 6).map((item) => {
          return <StudioCard data={item} key={item._id} />;
        })}
      </div>
    </Container>
  );
}

export default SectionFeatured;
