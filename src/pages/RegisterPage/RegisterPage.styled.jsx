import styled from '@emotion/styled';

export const AnimatedBg = styled.div`
  display: flex;
  padding: 20px;
  padding-top: 80px;
  box-sizing: border-bor;
  flex-direction: row-reverse;
  justify-content: space-around;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
  @media (max-width: 590px) {
    flex-direction: initial;
    padding-top: 100px;
  }
`;

export const Benefits = styled.div`
  align-self: flex-end;
  margin-bottom: 100px;
  padding: 32px 24px;
  border-radius: 8px;
  background: rgba(14, 10, 27, 0.5);
  border: 1px solid rgba(14, 10, 27, 0.5);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  color: white;
  @media (max-width: 1120px) {
    margin: 0 auto;
  }
  @media (max-width: 590px) {
    display: none;
  }
`;

export const RegisterTitle = styled.h1`
  margin-top: 0;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-left: 15px;
  margin-bottom: 0;
`;
