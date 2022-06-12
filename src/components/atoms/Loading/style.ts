import styled from 'styled-components';

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;
 
  img {
    width: 150px;
    animation:loading 4s linear infinite;
    @keyframes loading {
      from {
        transform: rotate(360deg);
      }

      to {
        transform: rotate(0deg);
      }
    }
  }
`;
