import styled from 'styled-components';

export const StyledError = styled.h2`
  margin-top: ${p => p.theme.space[5]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Img = styled.img`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
