import { ContainerModal, Modal } from './style';
import { Button } from '../../atoms/Button';

const ModalPokemon = ({ handleModal, detailsPokemon }: any) => {
  return (
    <ContainerModal>
      <Modal>
        <Button
        end
          onClick={() => {
            handleModal();
          }}
          children="x"
        />
      
        <img src={detailsPokemon.sprites.front_default} />
        <p>{`#${detailsPokemon.id}`}</p>
        <h1>{detailsPokemon.name}</h1>
      
        <h2>Pokedex Entry</h2>
      </Modal>
    </ContainerModal>
  );
};

export default ModalPokemon;
