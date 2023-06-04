import styled from 'styled-components';

export const ActorsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]}px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: ${p => p.theme.space[4]}px;
  }
`;

export const ActorItem = styled.li`
  border-radius: 10px;
  box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 16px) / 3);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 16px) / 4);
  }
`;

export const ActorImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

export const ActorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  padding: 16px 10px;
  text-align: center;
`;
