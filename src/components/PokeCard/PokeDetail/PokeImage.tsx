import React, { useState } from "react";
import styled from "styled-components";
import { PokeImageProps } from "../props";

const StyledPokeImage = styled.div`
  img {
    height: 8vh;
  }
`;

export default function PokeImage({ sprites }: PokeImageProps) {
  const [imageShown, setImageShown] = useState<number>(0);
  const [images, setImages] = useState<[string, string]>([
    sprites.front_default,
    sprites.back_default,
  ]);

  const handleChangeImageShown = (): void => {
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
