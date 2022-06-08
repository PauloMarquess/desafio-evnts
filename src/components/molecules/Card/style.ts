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
  bottom: 50px;
  max-width: 100px;
`;

export const CardTypes = styled.div`
  display: flex;
  gap: 20px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;
  bottom: 50px;
  right: 6%;

  h3 {
    font-weight: 600;
    color: #2d3c53;
    text-transform: capitalize;
  }
  h4 {
    font-weight: 500;
    color: #b4bbc3;
  }
`;
