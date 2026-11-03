import React, { ComponentPropsWithoutRef } from "react";
import { TStudio } from "@/types";
import { PiCheckCircle } from "react-icons/pi";
import Container from "@/components/ui/common/Container";
import StudioShowBooking from "./StudioShowBooking";

type StudioShowDetailsProps = {
  data: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioShowDetails(props: StudioShowDetailsProps) {
  const { data, className, children, ...rest } = props;

  return (
    <Container
      boxClassName={`grid items-start gap-8 lg:grid-cols-3 ${className ? className : ""}`}
      setYSpace="pt-6 pb-20"
      setXSpace=""
      {...rest}
    >
      <div className="space-y-8 lg:col-span-2">
        <div className="space-y-3 p-6 rounded-md bg-gray-50">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="max-w-prose leading-relaxed text-base-content/80">
            {data.overview}
          </p>
        </div>

        <div className="space-y-3 p-6 rounded-md bg-gray-50">
          <h2 className="text-xl font-semibold">Amenities</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {data.amenities.map((amenity) => (
              <li key={amenity} className="flex items-center gap-2">
                <PiCheckCircle
                  aria-hidden
                  className="size-5 shrink-0 text-success"
                />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <StudioShowBooking data={data} />
    </Container>
  );
}

export default StudioShowDetails;
