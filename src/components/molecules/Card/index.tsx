import axios from 'axios';
import { useEffect, useState } from 'react';
import { BoxShadow } from '../../atoms/BoxShadow/style';
import TypesPokemon from '../../atoms/TypesPokemon';
import { CardTypes, ContainerCards, Description, ImagePokemon } from './style';

const Card = ({ pokemons }: any) => {
  const [images, setImages] = useState();
  const [loading,setLoading] = useState(true)

  async function openModalDetailsPokemon(url: any) {
    const { data } = await axios.get(url);

    setImages(data.sprites.front_default);
  }

 
  

  return (
    <ContainerCards>
      {pokemons.map((pokemon: any) => (
        <Item item={pokemon} />
      ))}
    </ContainerCards>
  );
};

const Item = ({ item }) => {
  const [pokemon, setPokemon] = useState('');
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    details(item.url);
    setLoading(false)
  }, []);

  async function details(url: any) {
    const { data } = await axios.get(url);

    const image = await axios.get(url);

    console.log(data);

    setPokemon({ ...data, image: image.data.sprites.front_default });
  }

  if(loading){
    return <></>
  }

  return (
    <BoxShadow responsive pointer column>
      <Description>
        <h4>Nº {pokemon.id}</h4>
        <ImagePokemon src={pokemon.image} />
        <h3 onClick={() => {}}>{pokemon.name}</h3>
        <CardTypes>
         {pokemon.types.map((type)=>{
           return(
            <TypesPokemon type={type.type.name} />
           )
         })}
        </CardTypes>
      </Description>
    </BoxShadow>
  );
};

export default Card;
