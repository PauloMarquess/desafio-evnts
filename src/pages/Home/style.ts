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

