import React from "react";
import { StudioCardSK } from "./StudioCard";
import Container from "@/components/ui/common/Container";

function StudioGridSK() {
  return (
    <Container boxClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StudioCardSK />
      <StudioCardSK />
      <StudioCardSK />
      <StudioCardSK />
      <StudioCardSK />
      <StudioCardSK />
    </Container>
  );
}

export default StudioGridSK;
