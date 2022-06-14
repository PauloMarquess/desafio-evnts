import styled from 'styled-components';

export const ContainerPagination = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  width:30%;
  gap: 10px;
  position: relative;
  bottom: 25px;
  @media (max-width:769px){
    width: 60%;
  }
`;
