import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/Container";

type SectionAboutProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionAbout(props: SectionAboutProps) {
  const { className, ...rest } = props;

  return (
    <Container id="about" {...rest}>
      <h2 className="heading-2 mb-4">About Section</h2>
    </Container>
  );
}

export default SectionAbout;
