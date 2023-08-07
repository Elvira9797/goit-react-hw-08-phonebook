import { LinkStyled, Nav } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { MdOutlineContactPhone } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <LinkStyled to="/">
        Home <MdOutlineContactPhone size={24} />
      </LinkStyled>
      {isLoggedIn && (
        <LinkStyled to="/contacts">
          Contacts <RiContactsLine size={20} />
        </LinkStyled>
      )}
    </Nav>
  );
};

export default Navigation;
