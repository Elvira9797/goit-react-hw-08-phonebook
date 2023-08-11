import styled from '@emotion/styled';

export const Header = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.lightBlue};
  padding: 8px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  max-width: 980px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;
