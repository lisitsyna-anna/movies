import Container from '../../components/Container';
import img from '../../images/not-found.png';
import { Wrapper, Title, Img } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sorry, this page does not exist</Title>
        <Img src={img} alt={'Not found'} width={288} />
      </Wrapper>
    </Container>
  );
};

export default NotFoundPage;
