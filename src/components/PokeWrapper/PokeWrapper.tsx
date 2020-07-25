import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import PokeList from "../PokeList/PokeList";

const StyledWrapper = styled.div`
  max-height: 100vh;
  background-color: rgb(255, 255, 255);
  border-left: 0.1px solid gray;
  border-right: 0.1px solid gray;
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
