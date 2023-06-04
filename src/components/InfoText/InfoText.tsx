import img from '../../images/oops.png';

import { StyledText, Img } from './InfoText.styled';

interface InfoTextProps {
  text: string;
}

const InfoText: React.FC<InfoTextProps> = ({ text }) => {
  return (
    <>
      <StyledText>{text}</StyledText>
      <Img src={img} alt={'oops'} width={300} />
    </>
  );
};

export default InfoText;
