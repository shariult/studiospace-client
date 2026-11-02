import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import StudioCard from "../studio/StudioCard";

type SectionFeaturedProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionFeatured(props: SectionFeaturedProps) {
  const { className, ...rest } = props;

  return (
    <Container {...rest}>
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

      <div className="grid grid-cols-3 gap-4">
        <StudioCard />
        <div className="h-20 bg-gray-200"></div>
        <div className="h-20 bg-gray-200"></div>
      </div>
    </Container>
  );
}

export default SectionFeatured;
