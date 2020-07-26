import React from "react";
import { useQuery } from "react-query";
import PokeCard from "../../components/PokeCard/PokeCard";
import { PokeCardContainerProps } from "./props";
import PokeCardLoader from "../../components/PokeCard/PokeCardLoader/PokeCardLoader";

export default function PokeCardContainer({ id }: PokeCardContainerProps) {
  const END_POINT: string = "https://pokeapi.co/api/v2/pokemon";

  const getOnePokemon = async (url: string) => {
    const response: Response = await fetch(url);
    return response.json();
  };

  const { status, data, error } = useQuery(`${END_POINT}/${id}`, getOnePokemon);

  if (status === "loading") {
    return <PokeCardLoader />; // loading state
  }

  if (status === "error") {
    return <div>{error?.message}</div>; // error state
  }

  return <PokeCard pokemon={data} />;
}
