import { categories } from "@/data/categories";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type StudioIndexCategoryProps = {
  catQuery: string;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioIndexCategory(props: StudioIndexCategoryProps) {
  const { catQuery, className, children, ...rest } = props;

  return (
    <div
      className={`flex flex-wrap gap-3 md:gap-4 mb-12 ${className ? className : ""}`}
      {...rest}
    >
      <Link
        href={"/studios"}
        className={`badge badge-neutral ${!catQuery ? "" : "badge-outline"}`}
      >
        All
      </Link>
      {categories.map((category) => {
        return (
          <Link
            href={`/studios?category=${category.slug}`}
            className={`badge badge-neutral ${catQuery === category.slug ? "" : "badge-outline"}`}
            key={category.id}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
}

export default StudioIndexCategory;
