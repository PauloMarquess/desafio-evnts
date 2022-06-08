import styled from 'styled-components';

interface BoxShadowProps {
  fullWidth?: boolean;
}

export const BoxShadow = styled.div<BoxShadowProps>`
  display: flex;
  -webkit-box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.1);
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '250px')};

  input,select {
    border-radius: 4px;
    height: 48px;
    width: 100%;
    border: none;
    padding-left: 20px;
    ::placeholder{
      color: #838486;
    }
  }
 
`;
