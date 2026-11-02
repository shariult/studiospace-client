import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type HeroSlideProps = {
  title: string;
  subTitle: string;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function HeroSlide(props: HeroSlideProps) {
  const { title, subTitle, className, ...rest } = props;
  return (
    <div
      className={`max-w-330 h-full mx-auto px-6 flex flex-col justify-center ${className ? className : ""}`}
      {...rest}
    >
      <p className="px-4 py-1 mb-4 uppercase text-xs tracking-widest border border-gray-50 rounded-full self-start">
        Creative Studio Rental
      </p>
      <h1 className="text-6xl max-w-[16ch] capitalize">{title}</h1>
      <p className="max-w-[40ch] mb-8">{subTitle}</p>
      <div className="flex gap-4">
        <Link
          href={"/studios"}
          className="btn bg-primary border-primary text-primary-content hover:bg-primary-hover hover:border-primary-hover shadow-none"
        >
          Explore Studios
        </Link>
        <Link
          href={"/add-studio"}
          className="btn hover:bg-primary-hover hover:border-primary-hover hover:text-primary-content shadow-none"
        >
          Host Your Space
        </Link>
      </div>
    </div>
  );
}

export default HeroSlide;
