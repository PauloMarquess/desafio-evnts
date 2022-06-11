import { BoxShadow } from '../../atoms/BoxShadow/style';

import {
  CardTypes,
  ContainerCards,
  Description,
  ImagePokemon,
  Type,
} from './style';

const Card = ({ pokemons }: any) => {
  const openModalDetailsPokemon =(description: string)=> {
    console.log(description);
  }

  return (
    <ContainerCards>
      {pokemons.map((pokemon: any) => (
        <BoxShadow
          onClick={() => {
            openModalDetailsPokemon(pokemon);
          }}
          responsive
          pointer
          key={pokemon.id}
          column
        >
          <ImagePokemon src={pokemon.sprites.front_default} />
          <Description>
            <h4>Nº {pokemon.id}</h4>
            <h3 onClick={() => openModalDetailsPokemon(pokemon.url)}>
              {pokemon.name}
            </h3>
            <CardTypes>
              {pokemon.types.map((type: any, index: string) => (
                <Type key={index}>{type.type.name}</Type>
              ))}
            </CardTypes>
          </Description>
        </BoxShadow>
      ))}
    </ContainerCards>
  );
};

export default Card;
