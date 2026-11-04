import Container from "@/components/ui/common/Container";
import { formatPrice } from "@/lib/utils";
import { TStudio } from "@/types";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

type StudioShowImageProps = {
  data: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioShowImage(props: StudioShowImageProps) {
  const { data, className, children, ...rest } = props;
  const stats = [
    { label: "Hourly rate", value: formatPrice(data.hourlyRate) },
    { label: "Deposit", value: formatPrice(data.deposit) },
    { label: "Capacity", value: `${data.capacity} people` },
    { label: "Amenities", value: `${data.amenities.length} included` },
  ];
  return (
    <Container
      className="px-6"
      boxClassName={`grid gap-6 lg:grid-cols-3 ${className ? className : ""}`}
      setXSpace="px-0"
      setYSpace="py-8"
      {...rest}
    >
      <div className="lg:col-span-2">
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={1600}
          height={1000}
          priority
          className="aspect-16/10 w-full rounded-box object-cover"
        />
      </div>

      <dl className="grid grid-cols-2 content-start gap-3 lg:grid-cols-1">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-box border border-base-300 bg-base-100 p-4"
          >
            <dt className="text-sm text-base-content/70">{stat.label}</dt>
            <dd className="mt-1 text-xl font-semibold">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}

export default StudioShowImage;
