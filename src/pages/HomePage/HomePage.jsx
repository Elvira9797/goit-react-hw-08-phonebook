import HALO from 'vanta/src/vanta.halo';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import {
  AnimatedBg,
  Button,
  ButtonWrapper,
  SubTitle,
  Title,
  Wrapper,
} from './HomePage.styled';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    HALO({
      el: '#animateBg',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      backgroundColor: 0x82964,
      minHeight: 200.0,
      minWidth: 200.0,
      xOffset: -0.29,
      yOffset: -0.4,
      size: 1.6,
    });
  });

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleLoginClick = event => {
    if (event.target.name === 'login') {
      navigate('/login');
    } else if (event.target.name === 'register') {
      navigate('/register');
    } else {
      navigate('/contacts');
    }
  };

  return (
    <AnimatedBg
      id="animateBg"
      style={{ height: '100vh', justifyContent: 'space-around' }}
    >
      <Wrapper>
        <Title>Welcome to your personal Contact Book!</Title>
        <SubTitle>
          Here you'll find all your essential contacts in one place. Whether
          it's friends, family, colleagues, or business associates, our Contact
          Book helps you stay connected and organized.
        </SubTitle>
        <ButtonWrapper>
          {isLoggedIn ? (
            <Button name="contacts" onClick={handleLoginClick}>
              Your contact book
            </Button>
          ) : (
            <>
              <Button name="register" onClick={handleLoginClick}>
                Register
              </Button>
              <Button name="login" onClick={handleLoginClick}>
                Login
              </Button>
            </>
          )}
        </ButtonWrapper>
      </Wrapper>
    </AnimatedBg>
  );
};

export default HomePage;
