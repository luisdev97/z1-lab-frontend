export type PokeCardProps = {
  pokemon: any;
};

type PokeType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type pokeDetailProps = {
  types: Array<PokeType>;
  sprites: any;
};

export type PokeTypesProps = {
  types: Array<PokeType>;
};

export type PokeImageProps = {
  sprites: any;
};
