import { ContainerSelect } from './style';
import { icons } from '../../../assets';

const Select = ({ types }: any) => {
  console.log(types);
  return (
    <ContainerSelect>
      <img src={icons.pokeball} alt="imagem pokeball" />
      <select defaultValue="Type">
        <option>Type</option>
        {types?.map((typ: any) => (
          <option className='options' key={typ.name}>{typ.name}</option>
        ))}
      </select>
    </ContainerSelect>
  );
};

export default Select;
