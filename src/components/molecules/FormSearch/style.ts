import styled from 'styled-components';

export const CardInput = styled.form`
  width: 100%;
  display: flex;
  gap: 15px;
  @media (max-width:769px){
    flex-direction: column;
    gap: 0;
  }
`;

export const ImageInput = styled.img`
  width: 25px;
  height: 25px;
  position: relative;

  right: 12px;
  cursor: pointer;
`;
