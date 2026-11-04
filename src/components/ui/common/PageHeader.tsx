import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { TBreadCrumbs } from "@/types";
import Breadcrumbs from "./Breadcrumbs";

type PageHeaderProps = {
  breadcrumbs: TBreadCrumbs[];
  heading: string;
  details: string;
  className?: string;
} & ComponentPropsWithoutRef<"header">;

function PageHeader(props: PageHeaderProps) {
  const { heading, details, breadcrumbs, className, ...rest } = props;

  return (
    <Container el={"header"} className="bg-gray-100 dark:bg-gray-800" {...rest}>
      <Breadcrumbs data={breadcrumbs} className="mb-12" />

      <h2 className="heading-2 capitalize">{heading}</h2>
      <p className="text-muted">{details}</p>
    </Container>
  );
}

export default PageHeader;
