import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[7]}px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[4]}px;
  }
`;

export const MovieItem = styled.li`
  border-radius: 10px;
  box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);
  transition-property: box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 100%;
  padding-bottom: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 1 * 16px) / 2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 16px) / 4);
  }

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 0 20px -1px ${p => p.theme.colors.hoverColor};
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  text-align: center;
`;

export const MovieName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 600;
`;

export const RealeseDate = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Rating = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  padding: 5px 5px;
  border-radius: 0 10px 0 10px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const MovieImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;
