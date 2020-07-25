import React from "react";
import PokeballLoader from "./PokeballLoader";
import { StyledPokeCard } from "../PokeCard";

export default function PokeCardLoader() {
  return (
    <StyledPokeCard>
      <PokeballLoader />
    </StyledPokeCard>
  );
}
