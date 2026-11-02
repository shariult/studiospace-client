import React from "react";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";

type SectionTitleProps = {
  heading: string;
  headingSub: string;
  headingText?: string;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"div">;

function SectionTitle(props: SectionTitleProps) {
  const { heading, headingSub, headingText, children, className, ...rest } =
    props;

  return (
    <div
      className={`flex justify-between items-end ${className ? className : ""}`}
      {...rest}
    >
      <div>
        <p className="heading-sub ml-1 mb-1">{headingSub}</p>
        <h2 className="heading-2">{heading}</h2>
        {headingText && headingText.length > 0 && (
          <p className="text-muted">{headingText}</p>
        )}
      </div>

      {children}
    </div>
  );
}

export default SectionTitle;
