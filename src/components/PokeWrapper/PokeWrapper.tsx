import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import PokeList from "../PokeList/PokeList";

const StyledWrapper = styled.div`
  background-color: purple;
  height: 100vh;
  width: 30vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <Header />
      <PokeList />
    </StyledWrapper>
  );
};

export default Wrapper;
