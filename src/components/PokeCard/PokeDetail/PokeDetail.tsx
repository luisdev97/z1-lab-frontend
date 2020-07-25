import React from "react";
import styled from "styled-components";
import { pokeDetailProps } from "../props";
import PokeTypes from "./PokeTypes";
import PokeImage from "./PokeImage";

const StyledPokeDetail = styled.div`
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  div {
    width: 50%;
    height: 8vh;
    background-color: orange;
    margin: 1%;
  }
`;

export default function PokeDetail({ types, sprites }: pokeDetailProps) {
  return (
    <StyledPokeDetail>
      <PokeTypes types={types} />
      <PokeImage sprites={sprites} />
    </StyledPokeDetail>
  );
}
