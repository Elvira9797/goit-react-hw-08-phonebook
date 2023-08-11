import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
`;

export const StyledModal = styled(motion.div)`
  position: absolute;
  width: 400px;
  padding: 30px;
  background: #e7eff8;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  @media (max-width: 420px) {
    max-width: 100%;
  }
`;
