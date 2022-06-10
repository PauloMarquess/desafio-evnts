import Logo from '../../components/atoms/Logo';
import ListPokemonCard from '../../components/molecules/ListPodemonCard';
import FormSearch from '../../components/molecules/FormSearch';
import { Container } from './style';

const Home = () => {
  return (
    <Container fullHeight>
      <Logo />
      <Container width="70%">
        <FormSearch />
        <ListPokemonCard  />
      </Container>
    </Container>
  );
};

export default Home;
