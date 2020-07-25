import React, { useState } from "react";
import styled from "styled-components";
import { PokeImageProps } from "../props";

const StyledPokeImage = styled.div`
  img {
    height: 8vh;
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
