import React, { useContext, useState } from 'react';
import { CounterContext } from '../../../context';
import { Container } from '../../../pages/Home/style';
import { BoxShadow } from '../../atoms/BoxShadow/style';
import ModalPokemon from '../ModalPokemon';
import Pagination from '../Pagination';

import {
  CardTypes,
  ContainerCards,
  Description,
  ImagePokemon,
  Type,
} from './style';

const Card = () => {
  const { pokemonFilter } = useContext(CounterContext);
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
          <React.Fragment key={pokemon.id}>
            {pokemon.id <= 151 && (
              <BoxShadow  
                width="22%"
                onClick={() => {
                  handleModal(pokemon);
                }}
                responsive
                pointer
                column
              >
                <ImagePokemon src={pokemon.sprites.front_default} />
                <Description>
                  <h4>Nº {pokemon.id}</h4>
                  <h3 onClick={() => handleModal(pokemon.url)}>
                    {pokemon.name}
                  </h3>
                  <CardTypes>
                    {pokemon.types.map((type: any, index: string) => (
                      <Type className={type.type.name} key={index}>
                        {type.type.name}
                      </Type>
                    ))}
                  </CardTypes>
                </Description>
              </BoxShadow>
            )}
          </React.Fragment>
        ))}
      </ContainerCards>
      <Pagination />
    </Container>
  );
};

export default Card;
