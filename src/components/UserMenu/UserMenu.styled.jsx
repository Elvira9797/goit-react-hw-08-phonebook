import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: white;
  @media (max-width: 580px) {
    display: none;
  }
`;
export const Button = styled.button`
  background-color: none;
  background: none;
  color: white;
  border: 1px solid #503aed;
  padding: 12px;
  font-weight: 700;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
