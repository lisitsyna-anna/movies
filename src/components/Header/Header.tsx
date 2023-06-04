import Container from '../Container';
import { HeaderStyled, NavList, StyledNavLink } from './Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Container>
        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/" end>
                Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/serch-movie">Movies</StyledNavLink>
            </li>
          </NavList>
        </nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
