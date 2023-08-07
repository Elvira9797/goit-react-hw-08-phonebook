import styled from '@emotion/styled';

export const FormBox = styled.div`
  width: 400px;
  padding: 40px;
  margin-top: 90px;
  align-self: self-start;
  background: #f1f7fe;
  color: #010101;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-bottom: 25px;
  @media (max-width: 1120px) {
    margin: 0 auto;
  }
  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

export const FormTitle = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  margin-top: 0;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
`;

export const ContactBox = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  color: #black;
  top: ${({ filled, focused }) => (filled || focused ? '-20px' : '0')};
  left: 0;
  padding: 10px 0;
  font-size: ${({ filled, focused }) => (filled || focused ? '12px' : '16px')};
  color: ${({ filled, focused }) =>
    filled || focused ? '#bdb8b8' : '#898989'};
  pointer-events: none;
  transition: 0.5s;
`;

export const InputEmail = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  outline: none;
  background-color: transparent;
  transition: font-size 0.3s, color 0.3s;
  &::placeholder {
    color: #black;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  outline: none;
  background-color: transparent;
  transition: font-size 0.3s, color 0.3s;
  &::placeholder {
    color: black;
  }
  &:focus ~ label,
  &:valid ~ label,
  &:autofill ~ label {
    transform: translateY(-20px);
    font-size: 12px;
    color: #bdb8b8;
  }
`;

export const Button = styled.button`
  position: relative;
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

export const Div = styled.div`
  text-align: center;
  font-size: 14px;
  color: #e3474f;
`;
export const Question = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
`;

export const Login = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #0066ff;
  transition: color 0.3s ease;
  padding: 3px;
  &:hover {
    color: #005ce6;
    text-decoration: underline;
    cursor: pointer;
  }
`;
