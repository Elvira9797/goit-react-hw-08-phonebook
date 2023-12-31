import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.lightBlue};
  padding: 20px;
`;

export const Created = styled.p`
  color: #b0b7bd;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const LinkStyled = styled.a`
  color: #b0b7bd;
  transition: color 250ms ease;
  &:hover {
    color: #5333ed;
  }
`;
