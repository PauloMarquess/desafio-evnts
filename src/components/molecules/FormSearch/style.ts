import styled from 'styled-components';

export const CardInput = styled.form`
  width: 100%;
  display: flex;
  gap: 25px;
  @media (max-width:769px){
    flex-direction: column;
    gap: 0;
  }
  select{
    margin-right: 10px;
  }
  
`;

export const ImageInput = styled.img`
  width: 25px;
  height: 25px;
  position: relative;

  right: 12px;
  cursor: pointer;
`;
