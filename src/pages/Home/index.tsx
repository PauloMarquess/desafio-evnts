import { createContext, useState } from 'react';
import Loading from '../../components/atoms/Loading';
import Logo from '../../components/atoms/Logo';
import Card from '../../components/molecules/CardPokemon';
import FormSearch from '../../components/molecules/FormSearch';
import { Container } from './style';
export const CounterContext = createContext<any>('');
const Home = ({ pokemons, types, loading }: any) => {
  const [search, setSearch] = useState<any>([]);
  
  const pokemonFilter = pokemons.filter((pokemon: any) =>
    pokemon.name.toLowerCase().includes(search)
  );

  return (
    <Container fullHeight>
      <Logo />
      <Container width="70%">
        <CounterContext.Provider value={{ setSearch }}>
          <FormSearch types={types} />
          {loading ? <Loading /> : <Card pokemonFilter={pokemonFilter} />}
        </CounterContext.Provider>
      </Container>
    </Container>
  );
};

export default Home;
