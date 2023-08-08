import { styled } from "styled-components";

export const TextDiv = styled.div`
color: #ffff;

`;

export const LoginButton = styled.button`
  background-color: #6EE649;
  border: none;
  border-radius: 1.5rem;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 0.5em;
  padding: calc(1*0.5em) calc(1*1.5em);
  font-family: 'Ubuntu', sans-serif ;

  &:hover {
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
    background-color: #46DB54;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif ;
  font-weight: 900;
  color: #DBE649;
  font-size: 3em;
  line-height: 1.2em;
`;
export const Text = styled.h3`
font-size: 1em;
display: flex;
justify-content: center;
font-family: 'Ubuntu', sans-serif;
font-weight: 400;
line-height: .5em;
`;
export const TextInput = styled.p`
font-size: 1em;
display: flex;
justify-content: center;
color: #ededed;
font-family: 'Ubuntu', sans-serif;
font-weight: 400;
padding-bottom: 1em;
font-style: italic;
`;
