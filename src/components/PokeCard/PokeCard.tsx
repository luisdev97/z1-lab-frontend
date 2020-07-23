import React from "react";
import styled from "styled-components";
import { PokeCardProps } from "./props";

const SyledPokeCard = styled.div`
  height: 17%;
  width: 45%;
  background-color: gray;
`;

export default function PokeCard({ pokemon }: PokeCardProps) {
  const { name, id } = pokemon;

  const getFormtedId = (id: string): string => {
    let idPrefix: string = "#";
    if (id.length === 1) idPrefix = idPrefix.concat("00");
    else if (id.length === 2) idPrefix = idPrefix.concat("0");
    return idPrefix.concat(id);
  };

  return (
    <SyledPokeCard>
      {name} {getFormtedId(id.toString())}
    </SyledPokeCard>
  );
}
