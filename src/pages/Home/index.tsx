import Loading from '../../components/atoms/Loading';
import Logo from '../../components/atoms/Logo';
import Card from '../../components/molecules/CardPokemon';
import FormSearch from '../../components/molecules/FormSearch';
import { Container } from './style';
import { useContext } from 'react';
import { CounterContext } from '../../context';
const Home = () => {
  const { loading } = useContext(CounterContext);
  return (
    <Container fullHeight>
      <Logo />
      <Container width="70%">
        <FormSearch />
        {loading ? <Loading /> : <Card />}
      </Container>
    </Container>
  );
};

export default Home;
