import React from "react";
import styled from "styled-components";

const StyledPokeballLoader = styled.div`
  margin-top: 18%;
  margin-left: 36%;
`;

const PokeBall = styled.div`
  width: 3.3vw;
  height: 5.8vh;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: frames 0.8s linear 0s infinite;

  :before {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid;
    border-radius: 50%;
    bottom: 1.9vh;
    right: 1.1vw;
    z-index: 1;
  }

  :after {
    content: "";
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid;
    top: -4px;
  }

  @keyframes frames {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function PokeballLoader() {
  return (
    <StyledPokeballLoader>
      <PokeBall></PokeBall>
    </StyledPokeballLoader>
  );
}
