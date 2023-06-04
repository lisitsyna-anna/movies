import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
