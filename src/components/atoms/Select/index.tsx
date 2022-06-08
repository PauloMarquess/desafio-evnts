import { ContainerSelect } from "./style";
import { icons } from "../../../assets";

const Select = () => {
  return (
    <ContainerSelect>
        <img src={icons.pokeball } alt='imagem pokeball'/>
      <select defaultValue='Type'>
        <option >Type</option>
        <option>Macho</option>
        <option>Fêmea</option>
      </select>
    </ContainerSelect>
  );
};

export default Select;
