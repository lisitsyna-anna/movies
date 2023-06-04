import img from '../../images/oops.png';

import { StyledError, Img } from './RequestError.styled';

const RequestError = () => {
  return (
    <>
      <StyledError>Something went wrong... Try reloading the page</StyledError>
      <Img src={img} alt={'oops'} width={300} />
    </>
  );
};

export default RequestError;
