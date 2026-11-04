import React, { ComponentPropsWithoutRef } from "react";
import { TStudio } from "@/types";
import { PiCheckCircle } from "react-icons/pi";
import Container from "@/components/ui/common/Container";
import StudioShowBooking from "./StudioShowBooking";
import { User } from "better-auth";
import Image from "next/image";
import UserDemoImg from "@/components/ui/user/UserDemoImg";

type StudioShowDetailsProps = {
  data: TStudio;
  host: User;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioShowDetails(props: StudioShowDetailsProps) {
  const { data, host, className, children, ...rest } = props;

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

        <div className="space-y-3 p-6 rounded-md bg-gray-50">
          <h2 className="text-xl font-semibold">About Host</h2>
          <div className="flex gap-2 items-center">
            <div className="text-xlrounded-full bg-gray-100 self-start text-primary">
              {host?.image ? (
                <Image
                  src={host.image}
                  alt={host.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              ) : (
                <UserDemoImg name={host.name} />
              )}
            </div>
            <div>
              <h3 className="heading-4">{host.name}</h3>
              <p className="text-muted text-sm">{host.email}</p>
            </div>
          </div>
        </div>
      </div>

      <StudioShowBooking data={data} />
    </Container>
  );
}

export default StudioShowDetails;
