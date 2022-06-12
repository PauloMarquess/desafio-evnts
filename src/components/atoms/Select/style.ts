import styled from 'styled-components';

export const ContainerSelect = styled.div`
  display: flex;
  width: 100%;
  .options {
    font-size: 20px;
  }
  img {
    position: relative;
    right: 10px;
    width: 25px;
    left: 4px;
  }
  select {
    color: #838486;
    width: 230px;
    background-color: white;
    padding-left: 0;
  }

  @media (max-width: 769px) {
    select {
      width: 100%;
    }
  }
`;
