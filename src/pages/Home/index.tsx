
import Logo from '../../components/atoms/Logo';
import FormSearch from '../../components/molecules/FormSearch';
import { Container } from './style';


const Home = () => {
  return (
    <Container>
      <Logo />
      <Container width="70%">
        <FormSearch/>
      </Container>
    </Container>
  );
};

export default Home;
