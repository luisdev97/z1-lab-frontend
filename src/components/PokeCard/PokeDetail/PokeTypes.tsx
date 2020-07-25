import React from "react";
import styled from "styled-components";
import { PokeTypesProps } from "../props";

const StyledPokeTypes = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-content: space-between;
  span {
    padding: 0.3vh;
    padding-bottom: 0.5vh;
    font-size: 0.8em;
    background-color: #e0e0e0;
    color: #4f4f4f;
    align-self: center;
    width: 70%;
    border-radius: 15px;
    display: block;
    text-align: center;
  }
`;

export default function PokeTypes({ types }: PokeTypesProps) {
  return (
    <StyledPokeTypes>
      {types.map((t) => (
        <span>{t.type.name.toUpperCase()}</span>
      ))}
    </StyledPokeTypes>
  );
}
