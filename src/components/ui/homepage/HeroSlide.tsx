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
      <p className="inline-block mb-4 px-4 py-1 text-xs uppercase text-gray-50 tracking-[0.2rem] border border-gray-50 rounded-full self-start">
        Creative Studio Rental
      </p>
      <h1 className="text-6xl max-w-[16ch] capitalize">{title}</h1>
      <p className="max-w-[40ch] mb-8">{subTitle}</p>
      <div className="btn-box">
        <Link href={"/studios"} className="btn-fill-primary">
          Explore Studios
        </Link>
        <Link href={"/add-studio"} className="btn-outline-white">
          Host Your Space
        </Link>
      </div>
    </div>
  );
}

export default HeroSlide;
