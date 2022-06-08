import axios from 'axios';
import { useState } from 'react';
import { BoxShadow } from '../../atoms/BoxShadow/style';
import TypesPokemon from '../../atoms/TypesPokemon';
import { CardTypes, ContainerCards, Description, ImagePokemon } from './style';

const Card = ({ pokemons }: any) => {
  const [images, setImages] = useState();

  async function openModalDetailsPokemon(url: any) {
    const { data } = await axios.get(url);
    console.log(data);
    setImages(data.sprites.front_default);
  }

  return (
    <ContainerCards>
      {pokemons.map((pokemon: any) => (
        <BoxShadow pointer key={pokemon.name} column>
          <ImagePokemon src={images} width="200px" />
          <Description>
            <h4>Nº 200</h4>
            <h3 onClick={() => openModalDetailsPokemon(pokemon.url)}>
              {pokemon.name}
            </h3>
            <CardTypes><TypesPokemon type='Grass'/><TypesPokemon type='Fire'/></CardTypes>
          </Description>
        </BoxShadow>
      ))}
    </ContainerCards>
  );
};

export default Card;
