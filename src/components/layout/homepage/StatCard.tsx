import React, { ComponentPropsWithoutRef } from "react";

type StatCardProps = {
  value: string;
  caption: string;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StatCard(props: StatCardProps) {
  const { value, caption, className, children, ...rest } = props;

  return (
    <div className={`stat ${className ? className : ""}`} {...rest}>
      <div className="stat-value text-primary">{value}</div>
      <div className="stat-desc">{caption}</div>
    </div>
  );
}

export default StatCard;
