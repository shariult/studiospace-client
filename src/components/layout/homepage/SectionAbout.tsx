import React, { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import aboutImg from "@/assets/img/about.webp";
import StatCard from "@/components/layout/homepage/StatCard";

type SectionAboutProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionAbout(props: SectionAboutProps) {
  const { className, ...rest } = props;

  return (
    <Container
      id="about"
      className="bg-gray-100"
      boxClassName="grid grid-cols-2 gap-8"
      {...rest}
    >
      <div className="relative min-h-120">
        <Image
          src={aboutImg}
          alt="people working"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center">
        <SectionTitle
          headingSub="About Us"
          heading="Built by creators, for creators"
          headingText="Book and host with confidence."
          className="mb-4"
        />
        <p className="text-muted mb-4">
          StudioSpace started with a simple frustration: finding a good studio
          shouldn't take longer than the shoot. We bring hosts and creators
          together on one transparent platform.
        </p>

        <div className="stats shadow w-full md:p-8">
          <StatCard value="500+" caption="Studios" />
          <StatCard value="12k" caption="Bookings" />
          <StatCard value="4.8" caption="Avg. rating" />
        </div>
      </div>
    </Container>
  );
}

export default SectionAbout;
