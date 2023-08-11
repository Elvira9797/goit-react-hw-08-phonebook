import styled from '@emotion/styled';

export const BtnToTop = styled.button`
  position: fixed;
  right: 20px;
  bottom: 25px;
  width: 45px;
  height: 45px;
  background-image: linear-gradient(
    99deg,
    rgb(51, 106, 237) 0%,
    rgb(83, 51, 237) 80%,
    rgb(83, 51, 237) 20%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  border: none;
  transition-duration: 0.3s;
  &.visible {
    opacity: 1;
  }
`;
