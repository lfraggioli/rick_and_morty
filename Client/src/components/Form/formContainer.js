import React from 'react';
import { styled } from 'styled-components';

export const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1.5em;
  border-radius: 5%;
  background-color:  rgba(20, 20, 20, 0.7);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  width: calc(1.25*20em);
  height: calc(1.25*25em);

`;

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  border: none;
  border-radius: 3px;
  width: 100%;
  
`;

export const Label = styled.label`
color: white;
font-weight: bold;
font-size: 1.2em;
font-family: 'Ubuntu', sans-serif;

`;


