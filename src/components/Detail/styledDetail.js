import styled from "styled-components";
import portal from '../../assets/portal.png';

export const Container = styled.div`
display: flex;
justify-content: center;
`;


export const DetailDiv = styled.div`
 display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  padding: 0.2rem;
  border-radius: 5%;
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
  line-height: 1.2em;
`;

export const TextDiv = styled.div`
color: #ffff;
margin-left: 5%;
`;

export const Text = styled.h3`
font-size: 1.2em;
font-family: 'Ubuntu', sans-serif;
line-height: .5em;
`;

export const ImageDetail = styled.img`
  max-width: 75%;
  height: 30%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom: 2%;
  box-shadow: 10px 20px 15px rgba(0,0,0,0.8);
  align-self: center;
  border-radius: 5%;
`;

export const Hr = styled.hr`
max-width: 80%;
margin-right: 30%;
border: 3px solid white;
`