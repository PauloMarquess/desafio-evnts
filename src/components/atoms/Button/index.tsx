import { ReactNode } from 'react';
import { ContainerButton } from './style';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  flexEnd?: boolean ;
}

export const Button = ({ children, onClick, fullWidth, flexEnd }: ButtonProps) => {
  return (
    <ContainerButton flexEnd={flexEnd} fullWidth={fullWidth}>
      <button onClick={onClick}>{children}</button>
    </ContainerButton>
  );
};
