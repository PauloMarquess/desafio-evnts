import { ReactNode } from 'react';
import { ContainerButton } from './style';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  flexEnd?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  fullWidth,
  flexEnd,
  disabled,
}: ButtonProps) => {
  return (
    <ContainerButton flexEnd={flexEnd} fullWidth={fullWidth}>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </ContainerButton>
  );
};
