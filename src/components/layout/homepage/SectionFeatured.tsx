import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import StudioCard from "../studio/StudioCard";
import { studios } from "@/data/studios";

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

      <div className="grid grid-cols-3 gap-6">
        {studios.slice(0, 6).map((item) => {
          return <StudioCard data={item} key={item.id} />;
        })}
      </div>
    </Container>
  );
}

export default SectionFeatured;
