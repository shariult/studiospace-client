import React, { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TStudio } from "@/types";
import { PiShieldCheck, PiStarFill, PiUser } from "react-icons/pi";
import { formatPrice } from "@/lib/utils";

type StudioCardProps = {
  data: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioCard(props: StudioCardProps) {
  const { data, className, children, ...rest } = props;
  const href = `/studios/${data.slug}`;

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

      <div className="card-body gap-3 p-4">
        <h3 className="card-title heading-3">
          <Link href={href} className="hover:underline">
            {data.title}
          </Link>
        </h3>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1 text-sm text-muted">
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

        <div className="flex items-center justify-between border-t border-base-300 pt-3">
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
