import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: white;
  &.active {
    background-image: linear-gradient(
      99deg,
      rgb(51, 106, 237) 0%,
      rgb(83, 51, 237) 50%,
      rgb(83, 51, 237) 100%
    );
    border-radius: 5px;
  }
`;
