import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]}px;
`;

export const ReviewItem = styled.li`
  padding: 16px 16px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 7px 7px 46px -9px rgba(0, 0, 0, 0.35);
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Author = styled.p`
  font-weight: 600;
`;
