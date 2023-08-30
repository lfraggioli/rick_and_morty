import React from "react";
import { useState } from "react";
import {TextDiv, LoginButton, Title, Text, TextInput} from './styledForm.js';
import { FormContainer, Contenedor, Input, Label } from "./formContainer";

//*📌Para que valide mientras estoy ingresando los datos
const validate = (form, setErrors, errors) => {
  if (!form.email) setErrors({ ...errors, email: "El email está vacío" });
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "email inválido" });
  }
};

const Form = ({ login }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    //*📌👇🏻 le paso los parámetros a validate para que los ejecute en su contexto.
    //TODO: esto lo hago siempre que haya funciones declaradas afuera.
    validate({ ...form, [property]: value }, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //*Agregar solamente en el evento SUBMIT
    login(form);
  };

  return (
    <>
      <Contenedor>
        <FormContainer onSubmit={submitHandler}>
        <TextDiv>
          <Title>¡Bienvenidx!</Title>
          <Text>Por favor, ingresa los datos requeridos.</Text>
          <div>
            <Label htmlFor="">Email: </Label>
            <Input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <TextInput>abc@mail.com</TextInput>
            <span>{errors.email}</span>
          </div>
          <div>
            <Label htmlFor="">Password: </Label>
            <Input
              type="text"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <TextInput>1234</TextInput>
          </div>
          </TextDiv>
          <LoginButton type="submit">Login</LoginButton>
        </FormContainer>
        </Contenedor>
    </>
  );
};

export default Form;
