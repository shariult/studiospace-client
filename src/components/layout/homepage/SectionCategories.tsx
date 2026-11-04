import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/layout/homepage/CategoryCard";

type SectionCategoriesProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionCategories(props: SectionCategoriesProps) {
  const { className, ...rest } = props;

  return (
    <Container className="dark:bg-gray-800" {...rest}>
      <SectionTitle
        headingSub="Category"
        heading="Browse by Category"
        headingText=" Pick a vibe and jump straight into matching studios. "
        className="mb-12"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((item) => {
          return (
            <CategoryCard
              href={`/studios?category=${item.slug}`}
              data={item}
              key={item.id}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default SectionCategories;
