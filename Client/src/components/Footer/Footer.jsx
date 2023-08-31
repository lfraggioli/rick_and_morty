import React from "react";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { FooterContainer, SocialButton, DivSocial, Text } from "./styledFooter"; // Asegúrate de importar los estilos CSS o componentes necesarios

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <DivSocial>
          <SocialButton href="https://github.com/tu_perfil_de_github">
            <FaGithub />
          </SocialButton>
          <SocialButton href="mailto:tu_correo@gmail.com">
            <FaGoogle />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/tu_perfil_de_linkedin">
            <FaLinkedin />
          </SocialButton>
        </DivSocial>
        <Text>autor: "lucas fraggioli"</Text>
      </FooterContainer>
    </>
  );
};

export default Footer;
