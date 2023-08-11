import notFound from '../../images/not-found.png';
import {
  StyledArrowLeftIcon,
  StyledLinkBack,
  StyledNoFoundImg,
  Wrapper,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <StyledLinkBack to="/">
        <StyledArrowLeftIcon />
        Return to home page
      </StyledLinkBack>
      <StyledNoFoundImg src={notFound} alt="Page not found" />
    </Wrapper>
  );
};

export default NotFound;
