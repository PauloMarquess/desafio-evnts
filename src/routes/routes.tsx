import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { getPokemonData } from '../service/api';
import axios from '../service/index';

function Router() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let { data } = await axios.get(`/pokemon?limit=${20}&offset=${0}`);
      const results = data.results;
      const promises = results.map(async (pokemon: any) => {
        return await getPokemonData(pokemon.url);
      });
      const detailsPokemon = await Promise.all(promises);
      console.log('Aqui está', detailsPokemon);
    };
    loadAll();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home pokemons={pokemons} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
