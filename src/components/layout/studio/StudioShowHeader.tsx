import Container from "@/components/ui/common/Container";
import { TStudio } from "@/types";
import React, { ComponentPropsWithoutRef } from "react";
import { PiMapPin, PiStarFill } from "react-icons/pi";

type StudioShowHeaderProps = {
  data: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioShowHeader(props: StudioShowHeaderProps) {
  const { data, className, children, ...rest } = props;

  return (
    <Container
      el={"header"}
      className="px-6"
      boxClassName={`space-y-3 bg-gray-50 rounded-lg ${className ? className : ""}`}
      setYSpace="py-12"
      {...rest}
    >
      <span className="badge badge-neutral">{data.category}</span>
      <h1 className="text-3xl font-semibold sm:text-4xl">{data.title}</h1>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base-content/70">
        <p className="flex items-center gap-1.5">
          <PiMapPin aria-hidden className="size-5" />
          <span>{data.address}</span>
        </p>
        <p className="flex items-center gap-1.5">
          <PiStarFill aria-hidden className="size-5 text-warning" />
          <span>
            <span className="sr-only">Rating: </span>
            {data.rating.toFixed(1)}
          </span>
        </p>
      </div>
    </Container>
  );
}

export default StudioShowHeader;
