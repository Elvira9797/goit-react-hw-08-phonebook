import styled from '@emotion/styled';

export const Wrapper = styled.div`
  // background-color: #010620;
  // padding-bottom: 50px;
  // width: 100vw;
  // min-height: 100vh;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.lightBlue};
`;

export const Phonebook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #010620;
  padding-bottom: 50px;
  padding-top: 100px;
  width: 100vw;
  min-height: 100vh;
`;

export const ContactTitle = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.colors.lightBlue};
`;

export const Message = styled.p`
  font-size: 18px;
`;
