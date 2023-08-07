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
    background-color: #e2e5e8;
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

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ svg {
    fill: #e3474f;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
