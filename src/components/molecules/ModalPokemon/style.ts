import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: show 0.5s both;
  @keyframes show {
    from {
      opacity: 0;
      transform: translate3d(0, 0, 20%);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
export const Modal = styled.div`
  background-color: #fff;
  z-index: 5;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width:769px){
    width: 90%;
  }
  h5 {
    color: #b4bbc3;
    font-size: 16px;
    font-family: 800;
    margin-top: 10px;
  }

  width: 22%;
  Button {
    font-weight: normal;
    font-size: 30px;
    background: none;
    border: none;
    color: #dadada;
    padding: 5px 15px 0 0;
    :hover {
      color: #000;
    }
  }
  img {
    width: 150px;
  }
  p {
  }
`;
export const Paragraph = styled.p`
  width: 80%;
  text-align: center;
  color: #112240;
  margin-top: 10px;
`;
export const TextDestak = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #b4bbc3;
  text-transform: capitalize;
  margin: 10px 0 6px 0;
`;
