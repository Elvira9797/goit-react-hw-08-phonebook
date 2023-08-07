import RegisterForm from '../../components/RegisterForm/RegisterForm';
import HALO from 'vanta/dist/vanta.halo.min';

import { useEffect } from 'react';
import {
  AnimatedBg,
  List,
  RegisterTitle,
  Benefits,
} from './RegisterPage.styled';

const RegisterPage = () => {
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
    <AnimatedBg id="animateBg" style={{ height: '100vh' }}>
      <RegisterForm />
      <Benefits>
        <RegisterTitle>
          Register Now and Unlock Exclusive Benefits!
        </RegisterTitle>
        <List>
          <li>Never lose a contact again</li>
          <li>Simplify your life</li>
          <li>Find contacts instantly with smart search!</li>
          <li>
            Register today and discover the joy of a tidy and accessible contact
            book!
          </li>
        </List>
      </Benefits>
    </AnimatedBg>
  );
};

export default RegisterPage;
