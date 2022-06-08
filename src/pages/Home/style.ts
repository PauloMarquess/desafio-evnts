import styled from 'styled-components';
interface ContainerProps {
  width?:string
  fullHeight?:boolean
  
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction:column;
  background-color: #f6f8fc;
  height: ${(fullHeight) => (fullHeight ? '100vh' : 'height')};
  width: ${(props) => (props.width ? props.width : '100%')};
`;

