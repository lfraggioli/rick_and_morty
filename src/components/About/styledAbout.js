import styled from "styled-components";
import portal from '../../assets/portal.png';

export const Container = styled.div`
display: flex;
justify-content: center;
background: #141414;

`;
export const Image = styled.img`
margin-right: 5%;
  height: 40%;
  box-shadow: 10px 20px 15px rgba(0,0,0,0.8);
  border-radius: 10%;
`;

export const AboutStyle = styled.div`
   display: flex;
   align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: calc(1.5*536px);
height: calc(1.3*350px);
  padding: 0.2rem;
  border-radius: 7%;
margin: 8%;
box-shadow: 20px 20px 60px rgba(0,0,0,0.8);
background-image: url(${portal});
background-size: cover;
background-position: center;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif ;
  font-weight: 900;
  color: #DBE649;
  font-size: 3em;
  line-height: .2em;
`;
export const Hr = styled.hr`
max-width: 80%;
margin-right: 30%;
border: 3px solid white;
`
export const TextDiv = styled.div`
color: #ededed;
margin-left: 5%;
`;

export const Text = styled.h3`
font-size: 1em;
font-family: 'Ubuntu', sans-serif;
line-height: 1em;
`;