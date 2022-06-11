import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color:  rgba(0, 0, 0, 0.5);
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  background-color: #fff;
  z-index: 5;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10px 10px 20px 20px;
  width: 22%;
  Button {
    font-size: 30px;
    background: none;
    border: none;
  }
  img {
    width: 200px;
  }
`;
