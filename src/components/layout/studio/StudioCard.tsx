import React, { ComponentPropsWithoutRef } from "react";

type StudioCardProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioCard(props: StudioCardProps) {
  const { className, children, ...rest } = props;

  return (
    <div className={`${className ? className : ""}`} {...rest}>
      Studio Card
    </div>
  );
}

export default StudioCard;
