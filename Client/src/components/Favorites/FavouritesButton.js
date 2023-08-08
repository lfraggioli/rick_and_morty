import React from "react";
import { styled } from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
`;


export const FavButton = styled.button`
  background: transparent;
  cursor: pointer;
  display: inline-block;
  border-radius: 30%;
  font-family: 'Poppins', sans-serif;
  margin-left: .45em;
  margin-top: .45em;
  padding: .75em 1.75em;
  text-decoration: none;
  border: none;
  &:hover {
  background: #141414;
  text-decoration: none;
  transition: ease-in 0.2s;
}
`;

export const DivButton = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  height: 15%;
  
`
export const ContenedorFav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
`;
export const StyledSelect = styled.select`
  font-size: 16px;
  margin: 2em;
  font-family: 'Ubuntu', sans-serif;
  padding: 8px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

`;

export const SelectorDiv = styled.div`
 margin: auto;
  display: block;

`;
