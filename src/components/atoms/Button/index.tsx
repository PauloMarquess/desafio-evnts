import { ReactNode } from 'react';
import { ContainerButton } from './style';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  fullWidth?:boolean
  end?:boolean
}

export const Button = ({ children, onClick,fullWidth,end }: ButtonProps) => {
  return (
    <ContainerButton end={end} fullWidth={fullWidth}>
      <button onClick={onClick}>{children}</button>
    </ContainerButton>
  );
};
