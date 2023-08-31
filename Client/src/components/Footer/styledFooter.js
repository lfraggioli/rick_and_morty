import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0f2027;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1em;
  z-index: 2;
`;
export const DivSocial = styled.div`
  align-items: center;
  margin-top: 0;
`;
export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  border-radius: 50%;
  color: #fff;
  background-color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
    background-color: #46db54;
    cursor: pointer;
  }
  svg {
    font-size: 20px;
  }
`;

export const Text = styled.h4`
  font-size: 1.2em;
  padding-top: 0.5em;
  padding-bottom: 0;
  font-family: "Ubuntu", sans-serif;
  color: #fff;
`;
