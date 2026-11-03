import React, { ComponentPropsWithoutRef } from "react";

type StepCardProps = {
  heading: string;
  details: string;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"li">;

function StepCard(props: StepCardProps) {
  const { heading, details, className, children, ...rest } = props;

  return (
    <li className={`step step-neutral ${className ? className : ""}`} {...rest}>
      <div className={`bg-white w-full px-4 py-10 rounded-md`}>
        <h3 className="heading-3 text-primary mb-1">{heading}</h3>
        <p className="text-muted text-sm">{details}</p>
      </div>
    </li>
  );
}

export default StepCard;
