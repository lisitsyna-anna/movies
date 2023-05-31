import styled, { StyledComponent } from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  grid,
  background,
  border,
  position,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

type ContainerProps = SpaceProps &
  LayoutProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps;

const Container: StyledComponent<'div', any, ContainerProps> = styled.div<ContainerProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
`;

export default Container;
