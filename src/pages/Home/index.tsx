import Logo from '../../components/atoms/Logo';
import Card from '../../components/molecules/CardPokemon';
import FormSearch from '../../components/molecules/FormSearch';
import { Container } from './style';

const Home = ({ pokemons }: any) => {

  return (
    <Container fullHeight>
      <Logo />
      <Container width="70%">
        <FormSearch/>
        <Card pokemons={pokemons} />
      </Container>
    </Container>
  );
};

export default Home;
