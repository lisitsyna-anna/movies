import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

interface IBackLonkProps {
  to: string;
  children: React.ReactNode;
}

const BackLink: React.FC<IBackLonkProps> = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
