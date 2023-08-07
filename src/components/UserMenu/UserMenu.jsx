import { useDispatch, useSelector } from 'react-redux';
import { Button, UserName, Wrapper } from './UserMenu.styled';
import { selectUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import { BiLogOut } from 'react-icons/bi';

const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <UserName>Welcome, {userName}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Sign out
        <BiLogOut size={24} />
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
