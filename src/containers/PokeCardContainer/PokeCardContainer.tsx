import React from "react";
import { useQuery } from "react-query";
import PokeCard from "../../components/PokeCard/PokeCard";
import { PokeCardContainerProps } from "./props";
import PokeCardLoader from "../../components/PokeCard/PokeCardLoader/PokeCardLoader";

export default function PokeCardContainer({ id }: PokeCardContainerProps) {
  const getOnePokemon = async (url: string) => {
    const response: Response = await fetch(url);
    return response.json();
  };

  const { status, data, error } = useQuery(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    getOnePokemon
  );

  if (status === "loading") {
    return <PokeCardLoader />; // loading state
  }

  if (status === "error") {
    return <div>{error?.message}</div>; // error state
  }

  return <PokeCard pokemon={data} />;
}
