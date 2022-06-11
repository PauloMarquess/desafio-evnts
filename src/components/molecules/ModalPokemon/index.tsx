import { ContainerModal, Modal } from './style';
import { images } from '../../../assets';
import { Button } from '../../atoms/Button';
const ModalPokemon = ({openModalDetailsPokemon}:any) => {
  
  return (
    <ContainerModal>
      <Modal><img src={images.logo}/></Modal>
      <Button onClick={()=>{openModalDetailsPokemon()}} children='x'/>
    </ContainerModal>
  );
};

export default ModalPokemon;
