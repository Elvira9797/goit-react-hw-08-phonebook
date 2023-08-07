import AppBar from 'components/AppBar';
import HALO from 'vanta/src/vanta.halo';
import { useEffect } from 'react';
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

  const handleLoginClick = event => {
    console.dir(event.target.name);
    if (event.target.name === 'login') {
      navigate('/login');
    } else {
      navigate('/register');
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
          <Button name="register" onClick={handleLoginClick}>
            Register
          </Button>
          <Button name="login" onClick={handleLoginClick}>
            Login
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </AnimatedBg>
  );
};

export default HomePage;
