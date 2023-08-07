import Navigation from 'components/Navigation/Navigation';
import { Header, Wrapper } from './AppBar.styled';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Wrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Wrapper>
    </Header>
  );
};

export default AppBar;
