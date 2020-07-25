import React from "react";
import styled from "styled-components";
import { PokeCardProps } from "./props";
import PokeDetail from "./PokeDetail/PokeDetail";

const StyledPokeCard = styled.div`
  height: 17%;
  width: 45%;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 1%;
  p {
    font-size: 1.3em;
  }
  p.pokeId {
    color: #828282;
    text-align: right;
    margin: 4% 5% 0;
  }
  p.pokeName {
    margin: 0 0 0 5%;
    color: #4f4f4f;
  }
`;

export default function PokeCard({ pokemon }: PokeCardProps) {
  const { name, id, types, sprites } = pokemon;
  console.log(pokemon);
  const getFormtedId = (id: string): string => {
    let idPrefix: string = "#";
    if (id.length === 1) idPrefix = idPrefix.concat("00");
    else if (id.length === 2) idPrefix = idPrefix.concat("0");
    return idPrefix.concat(id);
  };

  return (
    <StyledPokeCard>
      <p className="pokeId">{getFormtedId(id.toString())}</p>
      <p className="pokeName">{name[0].toUpperCase() + name.slice(1)}</p>
      <PokeDetail types={types} sprites={sprites} />
    </StyledPokeCard>
  );
}
