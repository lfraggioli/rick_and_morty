import React from "react";
import image from './36d6ec5e-e14b-48f7-9d87-3f91695fe844.jpg';
import { AboutStyle, Container, Hr, Image, Title, TextDiv, Text } from "./styledAbout";



export default function About() {
  return (
    <Container>
    <AboutStyle>
      <TextDiv>
      <Title>About me</Title>
      <Hr/>
      <Text>Mi nombre es Lucas Fraggioli, tengo 25 años.</Text>
      <Text> Soy parte de la Cohorte Web PT-14A, y del grupo de SUP 03.</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae alias! Ullam?</Text>
      <Text>Consectetur optio illo nulla distinctio veniam vitae natus asperiores temporibus tenetur eveniet atque velit suscipit, facere alias provident?</Text>
      </TextDiv>
      <Image src={image}/>
    </AboutStyle>
    </Container>
  );
}
