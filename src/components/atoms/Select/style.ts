import styled from 'styled-components';

export const ContainerSelect = styled.div`
  display: flex;
  width: 100%;
  #default{
    font-size: 20px;
  }
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
    width: 300px;
    background-color: white;
    padding-left: 0;
  }

  @media (max-width: 769px) {
    select {
      width: 100%;
    }
  }
`;
