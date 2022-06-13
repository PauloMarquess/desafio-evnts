import { useState } from 'react';
import { Container } from '../../../pages/Home/style';
import { BoxShadow } from '../../atoms/BoxShadow/style';
import ModalPokemon from '../ModalPokemon';

import {
  CardTypes,
  ContainerCards,
  Description,
  ImagePokemon,
  Type,
} from './style';

const Card = ({ pokemonFilter }: any) => {
  const handleModal = (pokemon: any) => {
    setVisibleModal(!visibleModal);
    setDetailsPokemon(pokemon);
  };
  const [visibleModal, setVisibleModal] = useState(false);
  const [detailsPokemon, setDetailsPokemon] = useState({});

  return (
    <Container>
      {visibleModal && (
        <ModalPokemon
          detailsPokemon={detailsPokemon}
          handleModal={handleModal}
        />
      )}
      <ContainerCards>
        {pokemonFilter.map((pokemon: any) => (
          <BoxShadow
            onClick={() => {
              handleModal(pokemon);
            }}
            responsive
            pointer
            key={pokemon.id}
            column
          >
            <ImagePokemon src={pokemon.sprites.front_default} />
            <Description>
              <h4>Nº {pokemon.id}</h4>
              <h3 onClick={() => handleModal(pokemon.url)}>{pokemon.name}</h3>
              <CardTypes>
                {pokemon.types.map((type: any, index: string) => (
                  <Type className={type.type.name} key={index}>
                    {type.type.name}
                  </Type>
                ))}
              </CardTypes>
            </Description>
          </BoxShadow>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default Card;
