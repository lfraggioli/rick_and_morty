import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex-end;
  justify-content: center;
  align-items: space-around;
  background-color: #0f2027;
  position: fixed;
  height: 2em;
  padding: 1em;
  bottom: 0;
  z-index: 2;
  width: 100%;
  margin-bottom: 0;
`;
export const DivSocial = styled.div`
  align-items: center;
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

export const Text = styled.h3`
  position: relative;
  right: 0;
  z-index: 3;
  font-size: 1.2em;
  font-family: "Ubuntu", sans-serif;
  line-height: 0.5em;
  color: #fff;
`;
