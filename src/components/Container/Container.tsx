import { ContainerStyled } from './Container.styled';

interface IContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
