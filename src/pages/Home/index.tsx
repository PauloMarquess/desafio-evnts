import { BoxShadow } from '../../components/atoms/BoxShadow/style';
import Input from '../../components/atoms/Input';
import Logo from '../../components/atoms/Logo';
import { FormSearch, Container, ImageInput } from './style';
import { images } from '../../assets';

const Home = () => {
  return (
    <Container>
      <Logo />
      <Container width='70%'>
        <FormSearch>
          <BoxShadow fullWidth>
            <Input placeholder="Search your Pokémon!" />
            <ImageInput src={images.pokeBall} alt="Image Pokeball" />
          </BoxShadow>
          <Input placeholder="Search your Pokémon!" />
        </FormSearch>
      </Container>
    </Container>
  );
};

export default Home;
