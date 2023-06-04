import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 20px;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  transition: background-color ease-in 250ms;

  @media screen and (min-width: 1200px) {
    padding: 10px 35px;
    font-size: ${p => p.theme.fontSizes.xl};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;
