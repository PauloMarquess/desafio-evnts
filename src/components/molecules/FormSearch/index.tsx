import { useState } from 'react';
import { icons } from '../../../assets';
import { BoxShadow } from '../../atoms/BoxShadow/style';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';
import { CardInput, ImageInput } from './style';

const FormSearch = ({ types }: any) => {
  return (
    <CardInput>
      <BoxShadow fullWidth>
        <Input placeholder="Search your Pokémon!" onChange={() => {}} />
        <ImageInput src={icons.pokeBallPokemon} alt="Image Pokeball" />
      </BoxShadow>
      <BoxShadow>
        <Select types={types} />
      </BoxShadow>
    </CardInput>
  );
};

export default FormSearch;
