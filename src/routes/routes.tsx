import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import axios from '../service/index';

function Router() {
  const [pokemons, setPokemons] = useState([]);
 

  useEffect(() => {
    const loadAll = async () => {
      let {data} = await axios.get(`/pokemon?limit=${151}&offset=${0}`);
      setPokemons(data.results);
      
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
