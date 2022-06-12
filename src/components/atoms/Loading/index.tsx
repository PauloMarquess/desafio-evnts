import { images } from '../../../assets';
import { ContainerLoading } from './style';

const Loading = () => {
  return (
    <ContainerLoading>
      <h1>Carregando</h1>
      <img src={images.loading} alt="Carregando" />
    </ContainerLoading>
  );
};

export default Loading;
