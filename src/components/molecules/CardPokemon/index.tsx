import { BoxShadow } from '../../atoms/BoxShadow/style';
import TypesPokemon from '../../atoms/TypesPokemon';
import { CardTypes, Description, ImagePokemon } from './style';

const Card = ({ item }: any) => {
  return (
    <BoxShadow responsive pointer column>
      <ImagePokemon src={item.sprites.front_default} />
      <Description>
        <h4>Nº {item.id}</h4>
        <h3 onClick={() => {}}>{item.name}</h3>
        <CardTypes>
          {item.types.map((type:any) => {
            return <TypesPokemon type={type.type.name} />;
          })}
        </CardTypes>
      </Description>
    </BoxShadow>
  );
};

export default Card;
