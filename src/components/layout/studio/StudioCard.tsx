import React, { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TStudio } from "@/types";
import { PiMapPin, PiShieldCheck, PiStarFill, PiUser } from "react-icons/pi";
import { formatPrice } from "@/lib/utils";

type StudioCardProps = {
  data: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioCard(props: StudioCardProps) {
  const { data, className, children, ...rest } = props;
  const href = `/studios/${data._id}`;

  return (
    <div
      className={`card bg-base-100 border border-base-300 overflow-hidden ${
        className ?? ""
      }`}
      {...rest}
    >
      <figure className="relative">
        <Link href={href} tabIndex={-1} aria-hidden className="block w-full">
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={1200}
            height={800}
            className="aspect-3/2 w-full object-cover"
          />
        </Link>
        <span className="badge badge-neutral absolute left-3 top-3">
          {data.category}
        </span>
      </figure>

      <div className="card-body p-4">
        <h3 className="card-title heading-3">
          <Link href={href} className="hover:underline">
            {data.title}
          </Link>
        </h3>
        <p className="flex items-center gap-1 text-sm text-gray-700 mb-2">
          <PiMapPin /> {data.address}
        </p>

        <ul className="flex flex-wrap justify-between items-center gap-4 mb-2 p-3 text-sm text-muted border-y border-base-300">
          <li className="flex items-center gap-1.5">
            <PiUser className="size-4" />
            <span>{data.capacity} people</span>
          </li>

          <li className="flex items-center gap-1.5">
            <PiShieldCheck className="size-4" />
            <span>{formatPrice(data.deposit)} deposit</span>
          </li>

          <li className="flex items-center gap-1.5">
            <PiStarFill className="size-4 text-warning" />
            <span>{data.rating.toFixed(1)}</span>
          </li>
        </ul>

        <div className="flex items-center justify-between">
          <p>
            <span className="text-lg font-semibold">
              {formatPrice(data.hourlyRate)}
            </span>
            <span className="text-sm text-gray-600/80"> / hour</span>
          </p>

          <Link href={href} className="btn-fill-primary btn-sm">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudioCard;
