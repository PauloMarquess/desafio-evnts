import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import axios from 'axios';

function Router() {

  const [pokemons, setPokemons] = useState<any>([]);
  const [types,setTypes] =useState([])
  const [loading,setLoading]=useState(false)
  const baseUrl = 'https://pokeapi.co/api/v2';
  useEffect(() => {
    setLoading(true)
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
        setLoading(false)
      });
    });
  }, []);
  useEffect(()=>{
    axios.get(`${baseUrl}/type`).then((response)=>{
      const allTypes =response.data.results
      setTypes(allTypes)
    })
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home pokemons={pokemons} loading={loading} types={types} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
