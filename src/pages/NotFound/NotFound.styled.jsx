import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from '../../images/arrow-left.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #010620;
  width: 100vw;
  height: 100vh;
`;

export const StyledNoFoundImg = styled.img`
  width: 900px;
  height: auto;
  @media (max-width: 910px) {
    width: 100%;
  }
`;

export const StyledLinkBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${props => props.theme.colors.lightBlue};
  align-self: flex-start;
  padding: 20px;
  margin-top: 20px;
`;

export const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  stroke: ${props => props.theme.colors.lightBlue};
`;
