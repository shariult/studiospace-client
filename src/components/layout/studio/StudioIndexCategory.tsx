import { categories } from "@/data/categories";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type StudioIndexCategoryProps = {
  searchQuery: string;
  catQuery: string;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioIndexCategory(props: StudioIndexCategoryProps) {
  const { searchQuery, catQuery, className, children, ...rest } = props;

  return (
    <div
      className={`flex flex-wrap items-center gap-3 md:gap-4 ${className ? className : ""}`}
      {...rest}
    >
      <Link
        href={`/studios${searchQuery ? "?search=" + searchQuery : ""}`}
        className={`badge badge-neutral dark:border-gray-100 dark:text-gray-100 ${!catQuery ? "dark:bg-primary" : "badge-outline"}`}
      >
        All
      </Link>
      {categories.map((category) => {
        return (
          <Link
            href={`/studios?category=${category.slug}${searchQuery ? "&search=" + searchQuery : ""}`}
            className={`badge badge-neutral dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-900 ${catQuery === category.slug ? "dark:bg-primary" : "badge-outline"}`}
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
