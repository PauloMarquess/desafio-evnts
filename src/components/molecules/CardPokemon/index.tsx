import axios from 'axios';
import {  useState } from 'react';
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
  console.log(pokemons)
  

  return (
    <ContainerCards>
      {pokemons.map((pokemon: any) => (
        <BoxShadow responsive pointer key={pokemon.id} column>
          <ImagePokemon src={pokemon.sprites.front_default} />
          <Description>
            <h4>Nº {pokemon.id}</h4>
            <h3 onClick={() => openModalDetailsPokemon(pokemon.url)}>
              {pokemon.name}
            </h3>
            <CardTypes>
              {pokemon.types.map((type :any)=>(<TypesPokemon type={type.type.name}/>))}
          
             
            </CardTypes>
          </Description>
        </BoxShadow>
      ))}
    </ContainerCards>
  );
};

export default Card;
