import { useContext } from 'react';
import { icons } from '../../../assets';
import { CounterContext } from '../../../context';
import { BoxShadow } from '../../atoms/BoxShadow/style';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';
import { CardInput, ImageInput } from './style';

const FormSearch = () => {
  const { types, setSearch } = useContext(CounterContext);

  return (
    <CardInput>
      <BoxShadow fullWidth>
        <Input
          placeholder="Search your Pokémon!"
          onChange={(e: any) => {
            setSearch(e.target.value.toLowerCase());
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
