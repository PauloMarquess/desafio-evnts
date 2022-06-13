import { ContainerSelect } from './style';
import { icons } from '../../../assets';
import { useContext } from 'react';
import { CounterContext } from '../../../context';

const Select = ({ types }: any) => {
  const { selected, setSelected } = useContext(CounterContext);
  console.log(selected)
  return (
    <ContainerSelect>
      <img src={icons.pokeball} alt="imagem pokeball" />
      <select defaultValue={selected} onChange={(e : any) =>{setSelected(e.target.value)}} >
        <option>Type</option>
        {types?.map((typ: any) => (
          <option className="options" key={typ.name}>
            {typ.name}
          </option>
        ))}
      </select>
    </ContainerSelect>
  );
};

export default Select;
