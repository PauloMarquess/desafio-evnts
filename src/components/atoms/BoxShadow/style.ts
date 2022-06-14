import styled from 'styled-components';

interface BoxShadowProps {
  width?: string;
  column?: boolean;
  pointer?: boolean;
  responsive?: boolean;
}

export const BoxShadow = styled.div<BoxShadowProps>`
  display: flex;
  -webkit-box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.1);
  width: ${(props) => (props.width ? props.width : '100%')};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  border-radius: 8px;
  margin-bottom: 20px;
  align-items: center;
  background: #fff;

  cursor: ${({ pointer }) => (pointer ? 'pointer' : '')};
 
  input,
  select {
    height: 48px;
    width: 100%;
    border: none;
    padding-left: 20px;
    border-radius: 8px;
    ::placeholder {
      color: #838486;
    }
  }
  @media (max-width: 769px) {
    margin-bottom: 12px;
    width: ${({ responsive }) => (responsive ? '45%' : '100%')};
    height: ${({ responsive }) => (responsive ? '150px' : '')};
  }
`;
