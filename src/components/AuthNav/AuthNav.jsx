import { MdOutlineAppRegistration } from 'react-icons/md';
import { LinkStyled, Wrapper } from './AuthNav.styled';
import { BiLogIn } from 'react-icons/bi';

const AuthNav = () => {
  return (
    <Wrapper>
      <LinkStyled to="/login">
        Sign in <BiLogIn size={24} />
      </LinkStyled>
      <LinkStyled to="/register">
        Sign up <MdOutlineAppRegistration size={24} />
      </LinkStyled>
    </Wrapper>
  );
};

export default AuthNav;
