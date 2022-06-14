import styled from 'styled-components';

interface ContainerButtonProps {
  fullWidth?: boolean;
  flexEnd?: boolean;
}

export const ContainerButton = styled.div<ContainerButtonProps>`
  display: flex;
  align-self: ${({ flexEnd }) => (flexEnd ? 'end' : '')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 2px;
  }
`;
