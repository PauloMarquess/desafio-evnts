import { images } from "../../../assets";
import { BoxShadow } from "../../atoms/BoxShadow/style";
import Input from "../../atoms/Input";
import { CardInput, ImageInput } from "../style";


const FormSearch = () => {
  return (
  <CardInput>
          <BoxShadow fullWidth>
            <Input placeholder="Search your Pokémon!" />
            <ImageInput src={images.pokeBall} alt="Image Pokeball" />
          </BoxShadow>
          <Input placeholder="Search your Pokémon!" />
        </CardInput>);
}

export default FormSearch;