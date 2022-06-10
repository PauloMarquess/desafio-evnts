import { ContainerCards } from './style';

import { useState, useEffect } from 'react';

import CardPokemon from '../../molecules/CardPokemon';

const CardListPokemons = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchKantoPokemon();
    setLoading(false);
  }, []);

  function fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then(function (allpokemon) {
        allpokemon.results.forEach(function (pokemon :any) {
          fetchPokemonData(pokemon);
        });
      });
  }

  function fetchPokemonData(pokemon :any) {
    let url = pokemon.url;

    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        console.log(pokeData);
        setData((poke ) => [...poke, pokeData]);
      });
  }

  if (loading) {
    return <></>;
  }
  return (
    <ContainerCards>
      {data.map((pokemon: any) => (
        <CardPokemon item={pokemon} />
      ))}
    </ContainerCards>
  );
};

export default CardListPokemons;
