import React, { useState } from "react";
import styled from "styled-components";
import { PokeImageProps } from "../props";

const StyledPokeImage = styled.div`
  max-height: 80%;
  margin: 0 auto;
  padding-left: 1vw;
  padding-bottom: 3.5vh;
  img {
    height: 8.5vh;
  }
`;

export default function PokeImage({ sprites }: PokeImageProps) {
  const [imageShown, setImageShown] = useState(0);
  const [images, setImages] = useState([
    sprites.front_default,
    sprites.back_default,
  ]);

  const handleChangeImageShown = () => {
    imageShown === 0 ? setImageShown(1) : setImageShown(0);
  };

  return (
    <StyledPokeImage>
      <img
        src={images[imageShown]}
        alt=""
        onClick={() => handleChangeImageShown()}
      />
    </StyledPokeImage>
  );
}
