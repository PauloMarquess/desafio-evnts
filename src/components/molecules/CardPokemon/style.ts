import styled from 'styled-components';

export const ContainerCards = styled.div`
  width: 100%;
  min-height: 58vh;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
  align-items:flex-start;
  justify-content:flex-start;
  gap: 30px 1.8% ;
 @media (max-width:769px){
  gap: 30px;
 }
`;
export const ImagePokemon = styled.img`
  position: relative;
  bottom: 45px;
  max-width: 100px;
  @media (max-width: 769px) {
    width: 80px;
    bottom: 40px;
  }
`;

export const CardTypes = styled.section`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  @media (max-width: 769px) {
    gap: 5px;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 30px;

  h3,
  h6 {
    font-weight: 600;
    font-size: 20px;
    color: #112240;
    text-transform: capitalize;
  }
  h4 {
    font-weight: 500;
    color: #b4bbc3;
    margin: 5px 0;
  }
  h6 {
    font-size: 16px;
  }

  @media (max-width: 769px) {
    bottom: 30px;
  }
`;
export const Type = styled.p`
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 4px;
`;
