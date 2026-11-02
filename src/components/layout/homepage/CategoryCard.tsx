import { TCategory } from "@/types";
import Link, { LinkProps } from "next/link";
import React from "react";

type CategoryCardProps = {
  data: TCategory;
  className?: string;
} & LinkProps;

function CategoryCard(props: CategoryCardProps) {
  const { data, href, className, ...rest } = props;
  const Icon = data.icon;
  return (
    <Link
      href={href}
      className={`bg-white p-6 shadow rounded-md hover:scale-105 ${className ? className : ""}`}
      key={data.id}
      {...rest}
    >
      <span className="inline-block text-3xl mb-3 p-3 rounded-full text-primary bg-gray-100">
        <Icon />
      </span>
      <h3 className="heading-3 mb-1">{data.title}</h3>
      <p className="text-muted text-sm">{data.details}</p>
    </Link>
  );
}

export default CategoryCard;
