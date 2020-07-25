import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 5% 0 0 5%;
  flex: 0.3;
  flex-flow: column wrap;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>PokeDex</h1>
    </StyledHeader>
  );
}
