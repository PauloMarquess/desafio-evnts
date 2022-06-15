import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import axios from 'axios';
import { CounterContext } from '../context';

function Router() {
  const baseUrl = 'https://pokeapi.co/api/v2';
  const [pokemons, setPokemons] = useState<any>([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<any>([]);
  const [selected, setSelected] = useState('Type');

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}/pokemon?limit=151`).then((response) => {
      const pokelist = response.data.results;
      const requests = [];

      for (let i = 0; i < pokelist.length; i++) {
        requests.push(axios.get(pokelist[i].url));
      }

      axios.all(requests).then((responses) => {
        const pokelist = responses.map((response) => {
          return response.data;
        });
        setPokemons(pokelist);
        setLoading(false);
      });
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    if (selected !== 'Type') {
      axios.get(`${baseUrl}/type/${selected}`).then((response) => {
        let pokelist = response.data.pokemon;

        const requests = [];

        for (let i = 0; i < pokelist.length; i++) {
          requests.push(axios.get(pokelist[i].pokemon.url));
        }

        axios.all(requests).then((responses) => {
          const pokelist = responses.map((response) => {
            return response.data;
          });

          setPokemons(pokelist);
          setLoading(false);
        });
      });
    }
  }, [selected]);

  useEffect(() => {
    axios.get(`${baseUrl}/type`).then((response) => {
      const allTypes = response.data.results;
      setTypes(allTypes);
    });
  }, []);

  const pokemonFilter = pokemons.filter((pokemon: any) =>
    pokemon.name.toLowerCase().includes(search)
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CounterContext.Provider
              value={{
                pokemons,
                types,
                loading,
                pokemonFilter,
                setSearch,
                selected,
                setSelected,
                search,
              }}
            >
              <Home />
            </CounterContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
