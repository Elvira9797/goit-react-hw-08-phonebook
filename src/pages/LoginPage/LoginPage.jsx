import LoginForm from 'components/LoginForm';
import HALO from 'vanta/src/vanta.halo';
import { useEffect } from 'react';
import { AnimatedBg, Benefits, List, RegisterTitle } from './LoginPage.styled';

const LoginPage = () => {
  useEffect(() => {
    HALO({
      el: '#animateBg',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      backgroundColor: 0x82964,
      minHeight: 200.0,
      minWidth: 200.0,
      xOffset: -0.14,
    });
  });
  return (
    <AnimatedBg
      id="animateBg"
      style={{ height: '100vh', justifyContent: 'space-around' }}
    >
      <LoginForm />
      <Benefits>
        <RegisterTitle>Welcome to your Contacts Book!</RegisterTitle>
        <List>
          <li>Organize Your Contacts and stay Effortlessly Connected</li>
          <li>
            Discover a new level of efficiency and convenience with our contacts
            book!
          </li>
          <li>
            Rest assured that your contact information is kept secure and
            private at all times
          </li>
          <li>
            Thank you for trusting us to keep your connections in perfect order!
          </li>
        </List>
      </Benefits>
    </AnimatedBg>
  );
};

export default LoginPage;
