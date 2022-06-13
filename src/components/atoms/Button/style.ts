import styled from 'styled-components';

interface ContainerButtonProps {
  fullWidth?: boolean;
  flexEnd?: boolean;
}

export const ContainerButton = styled.div<ContainerButtonProps>`
  display: flex;
  align-self: ${({ flexEnd }) => (flexEnd ? 'end' : '')};

  button {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
  }
`;
