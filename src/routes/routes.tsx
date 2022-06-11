import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import axios from 'axios';

function Router() {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
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
        });
      });
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
