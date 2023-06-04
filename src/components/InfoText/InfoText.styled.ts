import styled from 'styled-components';

export const StyledText = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;

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
