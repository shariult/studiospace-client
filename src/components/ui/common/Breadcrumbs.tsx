import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { TBreadCrumbs } from "@/types";

type BreadcrumbsProps = {
  data: TBreadCrumbs[];
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function Breadcrumbs(props: BreadcrumbsProps) {
  const { data, className, children, ...rest } = props;

  return (
    <div
      className={`breadcrumbs text-sm ${className ? className : ""}`}
      {...rest}
    >
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {data.map((item) => {
          if (!item.slug) {
            return (
              <li key={item.id} className="text-gray-500">
                {item.label}
              </li>
            );
          }
          return (
            <li key={item.id}>
              <Link href={item.slug}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
