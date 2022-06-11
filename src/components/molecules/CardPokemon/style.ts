import styled from 'styled-components';

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
  align-items: center;
  justify-content: space-between;
  gap: 50px 0;
`;
export const ImagePokemon = styled.img`
  position: relative;
  bottom: 45px;
  max-width: 100px;
  @media (max-width:769px){
    width:80px;
    bottom:40px;
  }
`;

export const CardTypes = styled.section`
  display: flex;
  gap: 20px;
  @media (max-width:769px){
    gap: 5px;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;
  bottom: 30px;

  h3 {
    font-weight: 600;
    color: #2d3c53;
    text-transform: capitalize;
    margin: 10px 0 6px 0;
  }
  h4 {
    font-weight: 500;
    color: #b4bbc3;

  }
  @media (max-width:769px ){
    bottom: 30px;
  
  }
`;
export const Type = styled.p`
  background-color: #a8ee89;
  color: #427c2c;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 4px;
  
`;