import { ContainerModal, Modal, Paragraph, TextDestak } from './style';
import { Button } from '../../atoms/Button';
import { CardTypes, Description, Type } from '../CardPokemon/style';

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
        <Description>
          <h5>{`#${detailsPokemon.id}`}</h5>
          <h3>{detailsPokemon.name}</h3>
          <TextDestak>{`${detailsPokemon.name} Pokémon`}</TextDestak>
          <CardTypes>
            {detailsPokemon.types.map((type: any, index: string) => (
              <Type className={type.type.name} key={index}>
                {type.type.name}
              </Type>
            ))}
          </CardTypes>
          <h6>Pokedex Entry</h6>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </Paragraph>
        </Description>
      </Modal>
    </ContainerModal>
  );
};

export default ModalPokemon;
