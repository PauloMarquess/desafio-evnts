import styled from 'styled-components';

interface ContainerButtonProps {
  fullWidth?: boolean;
  end?: boolean;
}

export const ContainerButton = styled.div<ContainerButtonProps>`
  display: flex;
  align-self: ${({ end }) => (end ? 'end' : '')};

  button {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
  }
`;
