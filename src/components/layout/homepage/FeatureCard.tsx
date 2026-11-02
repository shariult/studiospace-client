import React, { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

type FeatureCardProps = {
  heading: string;
  details: string;
  icon: IconType;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function FeatureCard(props: FeatureCardProps) {
  const { heading, details, icon, className, children, ...rest } = props;
  const ReactIcon = icon;
  return (
    <div
      className={`flex gap-3 bg-gray-50 p-6 rounded-md shadow ${className ? className : ""}`}
      {...rest}
    >
      <div className="text-xl p-3 rounded-full bg-gray-100 self-start text-primary">
        <ReactIcon />
      </div>
      <div>
        <h3 className="heading-4">{heading}</h3>
        <p className="text-muted text-sm">{details}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
