import { Type } from "./style";

interface TypesPokemonProps {
  type: string;
}

const TypesPokemon = ({ type }: TypesPokemonProps) => {
  return <Type>{type}</Type>;
};

export default TypesPokemon;
