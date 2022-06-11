import styled from 'styled-components';

export const ContainerModal = styled.section`
  width: 100%;
  position: fixed;
  top:0;
  background-color: #000;
  height: 100%;
  opacity: 0.7;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Modal =styled.div`
background-color: #fff;
z-index: 5;
height: auto;

img{
    width: 200px;
    ;
}
`
