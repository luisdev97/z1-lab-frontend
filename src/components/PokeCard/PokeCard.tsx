import React from "react";
import styled from "styled-components";
import { PokeCardProps } from "./props";

const SyledPokeCard = styled.div`
  height: 17%;
  width: 45%;
  background-color: gray;
`;

export default function PokeCard({ pokemon }: PokeCardProps) {
  console.log(pokemon);
  return <SyledPokeCard>{pokemon?.name}</SyledPokeCard>;
}
