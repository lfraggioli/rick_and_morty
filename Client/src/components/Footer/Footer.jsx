import React from "react";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { FooterContainer, SocialButton, DivSocial, Text } from "./styledFooter"; // Asegúrate de importar los estilos CSS o componentes necesarios

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <DivSocial>
          <SocialButton href="https://github.com/lfraggioli">
            <FaGithub />
          </SocialButton>
          <SocialButton href="https://stackoverflow.com/users/20342658/cacodelphia">
            <FaStackOverflow />
          </SocialButton>
          <SocialButton href="mailto:fraggioli.lucas@gmail.com">
            <FaGoogle />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/lucasfraggioli/">
            <FaLinkedin />
          </SocialButton>
        </DivSocial>
      </FooterContainer>
    </>
  );
};

export default Footer;
