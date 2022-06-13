import { useContext, useState } from 'react';
import { icons } from '../../../assets';
import { CounterContext } from '../../../pages/Home';
import { BoxShadow } from '../../atoms/BoxShadow/style';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';
import { CardInput, ImageInput } from './style';

const FormSearch = ({ types }: any) => {
  const { search, setSearch } = useContext(CounterContext);

  return (
    <CardInput>
      <BoxShadow fullWidth>
        <Input
          placeholder="Search your Pokémon!"
          onChange={(e: any) => {
            setSearch(e.target.value);
          }}
        />
        <ImageInput src={icons.pokeBallPokemon} alt="Image Pokeball" />
      </BoxShadow>
      <BoxShadow>
        <Select types={types} />
      </BoxShadow>
    </CardInput>
  );
};

export default FormSearch;
