import axios from 'axios';
import { useEffect, useState } from 'react';

const Card = ({ pokemons }: any) => {
  const [images, setImages] = useState();


  async function openModalDetailsPokemon(url: any) {
    const { data } = await axios.get(url);
    console.log(data);
    setImages(data.sprites.front_default);
  }

  return (
    <>
      <div>
        {pokemons.map((pokemon: any) => (
          <ul key={pokemon.name}>
            <img src={images} width="200px" />
            <li onClick={() => openModalDetailsPokemon(pokemon.url)}>
              {pokemon.name}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Card;
