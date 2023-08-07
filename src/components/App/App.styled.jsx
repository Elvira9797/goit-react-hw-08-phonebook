import styled from '@emotion/styled';

export const Phonebook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ContactTitle = styled.h2`
  font-size: 28px;
`;

export const Message = styled.p`
  font-size: 18px;
`;
