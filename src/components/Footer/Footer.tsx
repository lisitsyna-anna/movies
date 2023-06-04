import Container from '../Container';
import { StyledFooter, FooterText, FooterLink } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterText>
          Created by{' '}
          <FooterLink href="https://github.com/lisitsyna-anna">Anna Lisitsyna</FooterLink>
        </FooterText>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
