import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type SectionStepsProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionSteps(props: SectionStepsProps) {
  const { className, ...rest } = props;

  return (
    <Container id="steps" {...rest}>
      <SectionTitle
        headingSub="Process"
        heading="How Booking Works"
        headingText="Four simple steps from idea to production."
        className="mb-6"
      />

      <ul className="steps steps-vertical md:steps-horizontal w-full gap-4">
        <li className="step step-neutral">
          <div className="bg-gray-100 w-full px-4 py-10 rounded-md">
            <h3 className="heading-3 mb-2 text-primary">Discover Spaces</h3>
            <p className="text-muted text-sm">
              Browse and filter studios by category, price and city.
            </p>
          </div>
        </li>

        <li className="step step-neutral">
          <div className="bg-gray-100 w-full px-4 py-10 rounded-md">
            <h3 className="heading-3 mb-2 text-primary">Select Shoot Hours</h3>
            <p className="text-muted text-sm">
              Pick a date and time slot that suits your schedule.
            </p>
          </div>
        </li>

        <li className="step step-neutral">
          <div className="bg-gray-100 w-full px-4 py-10 rounded-md">
            <h3 className="heading-3 mb-2 text-primary">Book Instantly</h3>
            <p className="text-muted text-sm">
              Reserve with transparent pricing and no hidden fees.
            </p>
          </div>
        </li>

        <li className="step step-neutral">
          <div className="bg-gray-100 w-full px-4 py-10 rounded-md">
            <h3 className="heading-3 mb-2 text-primary">
              Create &amp; Produce
            </h3>
            <p className="text-muted text-sm">
              Show up, set up, and make something great.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default SectionSteps;
