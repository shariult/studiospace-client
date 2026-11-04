import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type EmptyDataProps = {
  message?: string;
  setYSpace?: string;
  hideBtn?: boolean;
  isError?: boolean;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function EmptyData(props: EmptyDataProps) {
  const {
    message,
    setYSpace,
    hideBtn = false,
    isError = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <div
      className={`flex flex-col justify-center items-center ${setYSpace ?? "py-20"} text-center text-xl rounded-xl  border border-dashed ${isError ? "border-red-500 text-red-500" : "border-gray-500"} ${className ? className : ""}`}
      {...rest}
    >
      <p className="mb-6">{message ?? "No Data Found!"}</p>
      {!hideBtn && (
        <Link
          href="/"
          className="btn bg-primary hover:bg-primary-hover text-primary-content"
        >
          Back to Home
        </Link>
      )}
    </div>
  );
}

export default EmptyData;
