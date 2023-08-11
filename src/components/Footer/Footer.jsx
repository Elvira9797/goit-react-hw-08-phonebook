import { Created, FooterStyled } from './Footer.styled';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterStyled>
      <Created>
        Created by Elvira Lemak
        <div>
          <a
            href="https://github.com/Elvira9797"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/elvira-lemak/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={24} />
          </a>
        </div>
      </Created>
    </FooterStyled>
  );
};

export default Footer;
