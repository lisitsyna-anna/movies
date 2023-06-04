import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[6]}px;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[4]}px;
  }
`;

export const Input = styled.input`
  padding: 10px 16px;
  width: 200px;
  border: ${p => p.theme.borders.normal};
  outline: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  box-shadow: 10px 10px 42px -13px rgba(0, 0, 0, 0.49);
  -webkit-box-shadow: 10px 10px 42px -13px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 10px 10px 42px -13px rgba(0, 0, 0, 0.49);

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  ::placeholder {
    font-size: ${p => p.theme.fontSizes.s};

    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.m};
    }

    @media screen and (min-width: 1200px) {
      font-size: ${p => p.theme.fontSizes.l};
    }
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.hoverColor};
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  border: none;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 250ms ease-in;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;
