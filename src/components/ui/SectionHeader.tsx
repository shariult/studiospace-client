import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/Container";
import { TBreadCrumbs } from "@/types";
import Breadcrumbs from "./Breadcrumbs";

type SectionHeaderProps = {
  breadcrumbs: TBreadCrumbs[];
  heading: string;
  details: string;
  className?: string;
} & ComponentPropsWithoutRef<"header">;

function SectionHeader(props: SectionHeaderProps) {
  const { heading, details, breadcrumbs, className, ...rest } = props;

  return (
    <Container el={"header"} className="bg-gray-100" {...rest}>
      <Breadcrumbs data={breadcrumbs} className="mb-12" />

      <h2 className="heading-2 capitalize">{heading}</h2>
      <p className="text-muted">{details}</p>
    </Container>
  );
}

export default SectionHeader;
