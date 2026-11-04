import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import StepCard from "@/components/layout/homepage/StepCard";

type SectionStepsProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionSteps(props: SectionStepsProps) {
  const { className, ...rest } = props;

  return (
    <Container className="bg-gray-100 dark:bg-gray-900" id="steps" {...rest}>
      <SectionTitle
        headingSub="Process"
        heading="How Booking Works"
        headingText="Four simple steps from idea to production."
        className="mb-12"
      />

      <ul className="steps steps-vertical md:steps-horizontal w-full gap-4">
        <StepCard
          heading="Discover Spaces"
          details="Browse and filter studios by category, price and city."
        />

        <StepCard
          heading="Select Shoot Hours"
          details="Pick a date and time slot that suits your schedule."
        />

        <StepCard
          heading="Book Instantly"
          details="Reserve with transparent pricing and no hidden fees."
        />

        <StepCard
          heading="Create & Produce"
          details="Show up, set up, and make something great."
        />
      </ul>
    </Container>
  );
}

export default SectionSteps;
