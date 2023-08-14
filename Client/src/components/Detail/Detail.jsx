import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DetailDiv,Hr, ImageDetail, Container, Title, Text,TextDiv } from "./styledDetail";

export default function Detail() {
    const { id } = useParams();

  //*Crea un estado local con el nombre "character" que se inicialice como un objeto vacío
  const [character, setCharacter] = useState({});
  //TODO: NOTA👇🏻este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
    // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });

    // No es necesario devolver setCharacter({}) aquí
    // El retorno del useEffect solo debe utilizarse para realizar la limpieza de los efectos

  }, [id]);

  return (
  
    <Container>
    <DetailDiv>
    <TextDiv>
    <Text>Character ID: {character.id}</Text>
    <Hr/>
      {character.name && <Title>{character.name}</Title>}
      {character.status && <Text>State: {character.status}</Text>}
      {character.gender && <Text>Gender: {character.gender}</Text>}
      {character.origin && <Text>Origin: {character.origin.name}</Text>}
      </TextDiv>
      {character.image && <ImageDetail src={character.image}/>}
      </DetailDiv>
    </Container>
  );
}
