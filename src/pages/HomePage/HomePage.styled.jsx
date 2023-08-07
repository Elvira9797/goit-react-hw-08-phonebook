import styled from '@emotion/styled';

export const AnimatedBg = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Wrapper = styled.div`
  margin: auto auto;
  border: 2px solid ${props => props.theme.colors.lightBlue};
  overflow: hidden;
  width: 540px;
  padding: 30px;
  color: white;
  text-align: center;
  border-radius: 5px;
  @media (max-width: 620px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  margin-top: 0;
  color: #c3cdd8;
`;

export const SubTitle = styled.p`
  color: ${props => props.theme.colors.lightBlue};
  font-size: 18px;
  line-height: 1.36;
}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  background-image: linear-gradient(
    99deg,
    rgb(51, 106, 237) 0%,
    rgb(83, 51, 237) 50%,
    rgb(83, 51, 237) 100%
  );
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.3s;
  margin-top: 20px;
  letter-spacing: 4px;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      99deg,
      rgb(51, 106, 237) 0%,
      rgb(83, 51, 237) 80%,
      rgb(83, 51, 237) 20%
    );
    border-radius: 5px;
  }
`;
