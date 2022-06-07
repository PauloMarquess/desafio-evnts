import styled from 'styled-components';
interface ContainerProps {
  width?:string
}


export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f8fc;
  height: 100vh;
  width: ${(props) => (props.width ? props.width : '100%')};
`;
export const FormSearch = styled.form`
  width: 100%;
  display: flex;
  gap: 15px;
`;

export const ImageInput = styled.img`
  width: 25px;
  height: 25px;
  position: relative;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
