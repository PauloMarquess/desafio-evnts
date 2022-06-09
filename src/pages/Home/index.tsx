import Logo from '../../components/atoms/Logo';
import Card from '../../components/molecules/Card';
import FormSearch from '../../components/molecules/FormSearch';
import { Container } from './style';

import axios from '../../service';

import { useEffect, useState } from 'react';

const Home = () => {
  const [pokemon, setPokemons] = useState([]);
  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    let { data } = await axios.get(`/pokemon?limit=${151}&offset=${0}`);
    const results = data.results;
    setPokemons(results);
  };

  return (
    <Container fullHeight>
      <Logo />
      <Container width="70%">
        <FormSearch />
        <Card pokemons={pokemon} />
      </Container>
    </Container>
  );
};

export default Home;
