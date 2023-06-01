import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 100px;
  }
`;
