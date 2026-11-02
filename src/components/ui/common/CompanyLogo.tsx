import React from "react";
import Link, { LinkProps } from "next/link";
import { LogoSvg } from "@/components/ui/common/SVGIcons";

type CompanyLogoProps = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

function CompanyLogo(props: CompanyLogoProps) {
  const { className, href } = props;
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 text-sm md:text-md font-title ${className ? className : ""}`}
    >
      <LogoSvg className="w-6 md:w-8 text-primary" />
      <p className="flex flex-col">
        <span className="font-extrabold uppercase">Studio</span>
        <span className="-mt-1 text-gray-700 uppercase text-xs tracking-[0.2rem] md:tracking-[0.3rem]">
          Space
        </span>
      </p>
    </Link>
  );
}

export default CompanyLogo;
