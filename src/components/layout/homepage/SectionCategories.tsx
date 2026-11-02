import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type SectionCategoriesProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionCategories(props: SectionCategoriesProps) {
  const { className, ...rest } = props;

  return (
    <Container className="bg-gray-100" {...rest}>
      <SectionTitle
        headingSub="Category"
        heading="Browse by Category"
        headingText=" Pick a vibe and jump straight into matching studios. "
        className="mb-12"
      ></SectionTitle>

      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi harum
        incidunt officia sed ab, quod perspiciatis aliquam nobis atque, aliquid
        hic natus vero odit, ipsam suscipit quas doloribus facilis cum!
      </p>
    </Container>
  );
}

export default SectionCategories;
