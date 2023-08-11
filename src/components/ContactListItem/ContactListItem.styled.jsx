import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid ${props => props.theme.colors.lightBlue};
  border-radius: 5px;
  padding: 20px;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media (max-width: 420px) {
    max-width: 100%;
  }
  @media (min-width: 421px) {
    width: 350px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const ButtonStyledCancel = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;
  transition: background-color 250ms ease;
  &:hover,
  &:active {
    background-color: rgb(124 139 171 / 15%);
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;
  transition: background-color 250ms ease;
  &:hover,
  &:active {
    background-color: rgb(124 139 171 / 15%);
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Data = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #black;
  margin-bottom: 20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  outline: none;
  background-color: transparent;
`;
